import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import task from "@/models/task";

type Params = Promise<{ id: string }>;

export async function PUT(
  req: Request,
  { params }: { params: Params }
) {
  await connectDB();

  const { id } = await params; 
  const { completed } = await req.json();

  const updated = await task.findByIdAndUpdate(
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

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: Params }
) {
  await connectDB();

  const { id } = await params; 

  const deleted = await task.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Deleted successfully" });
}
