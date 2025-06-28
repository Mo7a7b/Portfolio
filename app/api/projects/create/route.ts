import connectToDB from "@/database/db";
import ProjectModel from "@/database/models/Project";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const body = await req.json();
    const { title, description, githubUrl, liveUrl, imageUrl, technologies } =
      body;

    if (!title) {
      return NextResponse.json(
        { error: "Project name is required." },
        { status: 400 }
      );
    }

    const project = new ProjectModel({
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      imageUrl,
    });
    await project.save();
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create project." },
      { status: 500 }
    );
  }
}
