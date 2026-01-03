import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import TaskModel from "@/models/task";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(
  req: NextRequest,
  { params }: Context
) {
  try {
    await connectDB();

    const { id } = await params; 
    const { completed } = await req.json();

    const updated = await TaskModel.findByIdAndUpdate(
      id,
      { completed },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      _id: updated._id.toString(),
      title: updated.title,
      completed: updated.completed,
    });
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: Context
) {
  try {
    await connectDB();

    const { id } = await params; 

    const deleted = await TaskModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}
