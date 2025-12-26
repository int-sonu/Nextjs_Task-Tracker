import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-15">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-center md:text-left">
            © 2025 
            <span className="font-semibold text-white">
              Task Manager
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/Home"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="/About"
              className="hover:text-white transition-colors"
            >
              About
            </Link>

            <Link
              href="/Add"
              className="hover:text-white transition-colors"
            >
              Add Task
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
