const SYSTEM_PROMPT = `Você é o assistente da Alpha.Tech, uma empresa brasileira de tecnologia fundada em 2026.

SOBRE A EMPRESA:
- Nome: Alpha.Tech
- Site: https://alphatech.vercel.app
- E-mail: alphatechsolucoesbr@gmail.com
- Instagram: @alphatechai
- Localização: Brasil

SERVIÇOS:
1. Criação de Sites: Sites modernos e responsivos usando Next.js, React e Tailwind CSS.
2. Automação: Automatização de processos repetitivos para empresas.
3. Inteligência Artificial: Soluções com IA generativa, chatbots e assistentes virtuais.
4. Sistemas Personalizados: Desenvolvimento de sistemas web sob medida.

PERSONALIDADE:
- Responda como um humano normal, não como um robô de atendimento.
- Nunca use travessões, listas com bullet points ou numeração nas respostas.
- Nunca use formatação markdown como **negrito** ou itálico.
- Seja direto e responda em no máximo 2 frases curtas.
- Use linguagem coloquial, como se estivesse conversando no WhatsApp.
- Se não souber responder algo, direcione para o e-mail de contato.
- Quando perguntar sobre preços, diga que são personalizados e sugira contato por e-mail ou formulário.`;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "API key não configurada", type: "missing_api_key" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: "Mensagens inválidas", type: "invalid_messages" }),
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
