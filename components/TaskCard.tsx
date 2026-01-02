"use client";

import { Task } from "@/Type/tasks";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

function Taskcard({ task }: { task: Task }) {
  const router = useRouter();

  async function handleTask(completed: boolean) {
    const res = await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });

    if (!res.ok) {
      alert("Failed to update task");
      return;
    }

    router.refresh();
  }

  async function handleDelete() {
    const res = await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Failed to delete task");
      return;
    }

    router.refresh();
  }

  return (
    <li className="min-h-[calc(64px+1rem)] p-4 bg-white rounded-xl shadow-md
                   hover:shadow-lg transition-all flex items-center
                   justify-between border border-gray-200">

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => handleTask(e.target.checked)}
          className="w-5 h-5 accent-violet-600"
        />

        <span
          className={`text-lg font-medium ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </label>

      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 p-2 rounded-lg
                   hover:bg-red-50 transition"
        title="Delete Task"
      >
        <RiDeleteBin6Line className="text-xl" />
      </button>
    </li>
  );
}

export default Taskcard;
