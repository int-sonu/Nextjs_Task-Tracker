import { connectDB } from "@/lib/db";
import Task from "@/models/task";
import { notFound } from "next/navigation";

export default async function TaskDetail({
  params,
}: {
  params: { id: string };
}) {
  await connectDB();

  const task = await Task.findById(params.id).lean();

  if (!task) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Task Details</h1>

      <div className="mt-4 border p-4 rounded">
        <p>
          <strong>Task:</strong> {task.title}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {task.completed ? "Completed" : "Pending"}
        </p>
      </div>
    </div>
  );
}
