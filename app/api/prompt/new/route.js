import Prompt from "@/models/prompt";
const { connectToDB } = require("@/utils/database");

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();

    if (!prompt || !tag) {
      return new Response("Please fill all the fields", { status: 500 });
    }

    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a prompt", { status: 500 });
  }
};
