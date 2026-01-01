import Taskcard from "@/components/TaskCard";
import { connectDB } from "@/lib/db";
import TaskModel from "@/models/task";

async function getTasks() {
  await connectDB();

  const tasks = await TaskModel.find().lean();

  return tasks.map((task) => ({
    _id: task._id.toString(),  
    title: task.title,
    completed: task.completed,
  }));
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className="min-h-[calc(100vh-72px)] pt-20 px-4
      bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600"
    >
      <ul className="max-w-2xl mx-auto space-y-4">
        {tasks.length === 0 && (
          <p className="text-center text-white/80 text-lg">
            No tasks found
          </p>
        )}

        {tasks.map((task) => (
          <Taskcard key={task._id} task={task} />
        ))}
      </ul>
    </main>
  );
}
