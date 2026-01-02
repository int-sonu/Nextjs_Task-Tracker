// import Taskcard from "@/components/TaskCard";
// import { connectDB } from "@/lib/db";
// import Task from "@/models/task";

// export const metadata = {
//   title: "Home | Task Tracker",
//   description: "View and manage tasks",
// };

// async function getTask() {
//   await connectDB();
//   return Task.find().lean();
// }

// export default async function Home() {
//   const tasks = await getTask();

//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <ul className="space-y-4">
//         {tasks.length === 0 && <p>No tasks found</p>}
//         {tasks.map((task: any) => (
//           <Taskcard key={task._id} task={task} />
//         ))}
//       </ul>
//     </div>
//   );
// }
