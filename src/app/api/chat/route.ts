const SYSTEM_PROMPT = `Você é o assistente virtual da Alpha.Tech, uma empresa brasileira de tecnologia fundada em 2026.

INFORMAÇÕES DA EMPRESA:
- Nome: Alpha.Tech
- Site: https://alphatech.vercel.app
- E-mail: alphatechsolucoesbr@gmail.com
- Instagram: @alphatechai
- Localização: Brasil

SERVIÇOS OFERECIDOS:
1. **Criação de Sites**: Sites modernos e responsivos usando Next.js, React e Tailwind CSS. Focados em performance e conversão.
2. **Automação**: Automatização de processos repetitivos para empresas economizarem tempo e recursos.
3. **Inteligência Artificial**: Soluções com IA generativa, chatbots inteligentes e assistentes virtuais personalizados.
4. **Sistemas Personalizados**: Desenvolvimento de sistemas web sob medida para necessidades específicas do negócio.

PERSONALIDADE:
- Seja amigável, profissional e use português brasileiro.
- Explique os serviços de forma clara e entusiasta.
- Use emojis com moderação para tornar a conversa mais acolhedora.
- Sempre que perguntado sobre preços, diga que os valores são personalizados conforme a necessidade e sugira entrar em contato pelo e-mail ou formulário.
- Se o visitante demonstrar interesse em contratar, incentive-o a entrar em contato via e-mail (alphatechsolucoesbr@gmail.com).

REGRAS:
- Não invente informações que não estejam acima.
- Se não souber responder algo, direcione para o e-mail de contato.
- Mantenha as respostas concisas (no máximo 3-4 parágrafos).`;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "API key não configurada" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: "Mensagens inválidas" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const groqMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  ];

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: groqMessages,
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      const body = await response.text();
      const isQuota = body.includes("429") || body.includes("rate_limit");
      return new Response(
        JSON.stringify({
          error: body,
          type: isQuota ? "quota_exceeded" : "unknown",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!response.body) {
      throw new Error("Resposta vazia da API Groq");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          let buffer = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });

            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();

              if (!trimmed || !trimmed.startsWith("data: ")) continue;

              const data = trimmed.slice(6);

              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed?.choices?.[0]?.delta?.content || "";
                if (content) {
                  controller.enqueue(new TextEncoder().encode(content));
                }
              } catch {
                continue;
              }
            }
          }

          controller.close();
        } catch {
          controller.enqueue(
            new TextEncoder().encode(
              "\n\nDesculpe, ocorreu um erro ao processar sua mensagem."
            )
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    return new Response(
      JSON.stringify({ error: message, type: "unknown" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
