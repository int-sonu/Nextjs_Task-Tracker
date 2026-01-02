import Taskcard from "@/components/TaskCard";

async function getTasks() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/tasks`,
    {
      cache: "no-store", 
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main
      className="min-h-[calc(100vh-72px)] pt-20 px-4
      bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600"
    >
      <ul className="max-w-2xl mx-auto space-y-4">
        {tasks.length === 0 && (
          <p className="text-center text-white/80 text-lg">
            No tasks found
          </p>
        )}

        {tasks.map((task: any) => (
          <Taskcard key={task._id} task={task} />
        ))}
      </ul>
    </main>
  );
}
