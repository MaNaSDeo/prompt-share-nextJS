import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    if (!prompts || prompts.length === 0) {
      return new Response(JSON.stringify({ message: "No prompts found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in GET route:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch prompts",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
