import { GoogleGenerativeAI } from "@google/generative-ai";

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
  const apiKey = process.env.GEMINI_API_KEY;

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

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history,
      systemInstruction: {
        role: "system",
        parts: [{ text: SYSTEM_PROMPT }],
      },
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessageStream(lastMessage);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(new TextEncoder().encode(text));
            }
          }
          controller.close();
        } catch {
          controller.enqueue(
            new TextEncoder().encode(`\n\nDesculpe, ocorreu um erro ao processar sua mensagem.`)
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
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
