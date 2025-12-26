import { Task } from "@/Type/tasks";

export default async function TaskDetail({ params }: { params: { id: string } }) {
  const baseurl = process.env.BASE_URL || "http://localhost:3000"
  const { id } = await params;
  console.log("ID from URL:", id);
  const res = await fetch(`${baseurl}/api/tasks/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const task: Task = await res.json();
  console.log("API response:", task);

  if (!task) {
    return <div className="p-6">Task Not Found</div>;
  }

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold">Task Details</h1>
      <div className="mt-4 border p-4 rounded">
        <p><strong>Task:</strong> {task?.title}</p>
        <p><strong>Status:</strong> {task.completed ? "Completed" : "Pending"}</p>
      </div>
    </div>
  );
}