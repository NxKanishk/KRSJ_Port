import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
    const { messages } = await req.json();

    if (!messages) {
        return new Response(
            JSON.stringify({ error: "No messages provided" }),
            { status: 400 }
        );
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
        });

        return new Response(
            JSON.stringify({ message: completion.choices[0].message }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: error.message || "OpenAI request failed" }),
            { status: 500 }
        );
    }
}
