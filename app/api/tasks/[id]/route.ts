import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import task from "@/models/task";
import { error } from "console";
import { New_Amsterdam } from "next/font/google";
export async function PUT(req: Request, context: any) {
    await connectDB()
    const { id } = await context.params
    const { completed } = await req.json()
    const update = await task.findByIdAndUpdate(
        id,
        { completed },
        { new: true }
    )
    if (!update) return NextResponse.json({ error: "Task not found" }, { status: 404 })
    return NextResponse.json(update)
}
export async function GET(req: Request, { params }: any) {
    await connectDB();
    const { id } = await params;
    console.log("url:", id);

    const task_new = await task.findById(id);
    return NextResponse.json(task_new, { status: 200 });
}
export async function DELETE(req: Request, { params }: any) {
    await connectDB()
    const { id } = await params
    const deletetask = await task.findByIdAndDelete(id)
    if (!deletetask) return NextResponse.json({ error: "Task not found" }, { status: 404 })
    return NextResponse.json({ message: "success fully deleted" }, { status: 200 })
}