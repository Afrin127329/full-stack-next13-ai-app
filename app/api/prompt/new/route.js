import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})


export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();
    const openai = new OpenAIApi(configuration);
    try {
        await connectToDB();
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${prompt}`,
            max_tokens: 50,
            temperature: 0.5,
        });
        const newPrompt = new Prompt({
            creator: userId, prompt: data.choices[0].text, tag
        });
        // const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
