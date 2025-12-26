import Image from "next/image";

export const metadata = {
  title: "Home | Task Tracker",
  description: "Manage your tasks easily",
};

export default function HomePage() {
  return (
    <section className="bg-slate-50 relative min-h-[calc(100vh-56px)] flex items-center overflow-hidden">
      
      <div className="relative w-[65%] h-[calc(100vh-64px)] ml-auto">
        <Image
          src="/h.jpg"
          alt="Task Manager"
          fill
          priority
          className="object-contain"
        />
      </div>


      <div className="absolute left-20 z-10 max-w-md text-slate-900">
        <h1 className="text-6xl font-extrabold tracking-tight  mb-5">
          Task Manager
        </h1>

        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-4">
          Plan smarter. Work faster. Achieve more.
        </p>

        <p className="text-base italic text-slate-400">
          “Turn your plans into progress.”
        </p>
      </div>

    </section>
  );
}
