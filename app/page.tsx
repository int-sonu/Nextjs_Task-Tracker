import Taskcard from "@/components/TaskCard";
import Image from "next/image";


export const metadata={
  title:"Home | Task Tracker",
  description:"View and manage tasks"
}
async function getTask() {
    const baseurl=process.env.BASE_URL ||"http://localhost:3000"
    const res=await fetch(`${baseurl}/api/tasks`,{cache:'no-store'})
    return res.json()
  }

export default async function Home(){
  const tasks=await getTask()
  return(
    <div className="p-8 max-w-3xl mx-auto">
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
      Task Tracker
    </h1>
  </div>
  <ul className="space-y-4">
    {tasks.length === 0 && (
      <p className="mt-10 text-gray-500 text-center text-lg">
        No tasks found.
      </p>
    )}

    {tasks.map((task: any) => (
      <Taskcard key={task._id} task={task} />
    ))}
  </ul>
</div>

  );
}