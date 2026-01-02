import { connectDB } from "@/lib/db"
import task from "@/models/task"
import { Task } from "@/Type/tasks"
import { NextResponse } from "next/server"
import { describe } from "node:test"

export async function GET(){
    await connectDB()
    const tasks=await task.find()
    return NextResponse.json(tasks)
}

export async function POST(req: Request) {
  await connectDB(); 

  const data = await req.json();

  if (!data.title) {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 }
    );
  }

  const newTask = await task.create({
    title: data.title,
    completed: false,
  });

  return NextResponse.json(newTask, { status: 201 });
}

