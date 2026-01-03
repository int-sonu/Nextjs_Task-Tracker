"use client";

import { Task } from "@/Type/tasks";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

function Taskcard({ task }: { task: Task }) {
  const router = useRouter();

  async function handletask(completed: boolean) {
    const res = await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });

    if (!res.ok) {
      console.error("PUT failed");
      return;
    }

    router.refresh();
  }

  async function handledelete(id: string) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.error("DELETE failed");
      return;
    }

    router.refresh();
  }

  return (
    <li className="min-h-[calc(64px+1rem)] p-4 bg-white rounded-xl shadow-md flex items-center justify-between border">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => handletask(e.target.checked)}
          className="w-5 h-5 accent-violet-600"
        />

        <span
          className={`text-lg ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </label>

      <button
        onClick={() => handledelete(task._id)}
        className="text-red-500 hover:text-red-700 p-2"
      >
        <RiDeleteBin6Line className="text-xl" />
      </button>
    </li>
  );
}

export default Taskcard;
