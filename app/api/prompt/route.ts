import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
