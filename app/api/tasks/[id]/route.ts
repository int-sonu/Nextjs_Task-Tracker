import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Task from "@/models/task";
import mongoose from "mongoose";

type Params = {
  params: {
    id: string;
  };
};

export async function PUT(req: Request, { params }: Params) {
  await connectDB();

  const { id } = params; 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const { completed } = await req.json();

  const updated = await Task.findByIdAndUpdate(
    id,
    { completed },
    { new: true }
  );

  if (!updated) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function GET(_: Request, { params }: Params) {
  await connectDB();

  const { id } = params; 

  const task = await Task.findById(id);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(task);
}

export async function DELETE(_: Request, { params }: Params) {
  await connectDB();

  const { id } = params; 

  const deleted = await Task.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Successfully deleted" },
    { status: 200 }
  );
}
