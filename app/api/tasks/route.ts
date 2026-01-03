import { connectDB } from "@/lib/db";
import TaskModel from "@/models/task";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const tasks = await TaskModel.find().lean();

    const formattedTasks = tasks.map((task) => ({
      _id: task._id.toString(), 
      title: task.title,
      completed: task.completed,
    }));

    return NextResponse.json(formattedTasks, { status: 200 });
  } catch (error) {
    console.error("GET /api/tasks error:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    if (!data.title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const newTask = await TaskModel.create({
      title: data.title,
      completed: false,
    });

    return NextResponse.json(
      {
        _id: newTask._id.toString(),
        title: newTask.title,
        completed: newTask.completed,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/tasks error:", error);
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }
}
