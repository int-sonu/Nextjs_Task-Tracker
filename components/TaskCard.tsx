"use client";

import { Task } from "@/Type/tasks";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Taskcard({ task }: { task: Task }) {
  const router = useRouter();

  async function toggleTask() {
    await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });

    router.refresh();
  }

  async function deleteTask() {
    await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <li className="flex justify-between p-4 bg-white rounded shadow">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleTask}
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </label>

      <button onClick={deleteTask} className="text-red-500">
        <RiDeleteBin6Line size={20} />
      </button>
    </li>
  );
}
