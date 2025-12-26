import TaskForm from "@/components/TaskForm";

export default function Addpage() {
  return (
    <main className="min-h-[calc(100vh-72px)] pt-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-extrabold mb-2  text-white text-center drop-shadow-sm">
          Create Task
        </h1>

        <div className="bg-white shadow-xl border-b-black rounded-xl p-6">
          <TaskForm />
        </div>
      </div>
    </main>
  );
}
