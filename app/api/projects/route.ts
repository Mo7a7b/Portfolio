import connectToDB from "@/database/db";
import ProjectModel from "@/database/models/Project";
import { NextResponse } from "next/server";
export async function GET() {
  await connectToDB();
  try {
    const projects = await ProjectModel.find();
    return NextResponse.json({ success: true, projects }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
