import Taskcard from "@/components/TaskCard";
import { Task } from "@/Type/tasks";

async function getTasks(): Promise<Task[]> {
  const res = await fetch("/api/tasks", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main
      className="
        min-h-[calc(100vh-72px)]
        pt-20
        px-4
        bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600
        overflow-x-hidden
      "
    >
      <ul className="max-w-2xl w-full mx-auto space-y-4">
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
