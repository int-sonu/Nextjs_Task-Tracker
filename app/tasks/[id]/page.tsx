import { Task } from "@/Type/tasks";

export default async function TaskDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(`/api/tasks/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-6">Task Not Found</div>;
  }

  const task: Task = await res.json();

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
