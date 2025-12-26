import Link from "next/link";

const Navbar=()=>{
    return (
     <nav className="w-full bg-gray-900 text-white px-6 py-6">
      <div className="max-w-6xl mx-auto flex justify-end  items-center">
        <ul className="flex gap-6 justify-end">
          <li>
            <Link href="/Home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Add" className="hover:text-gray-300">
              Create Task
            </Link>
          </li>
           <li>
            <Link href="/ViewTask" className="hover:text-gray-300">
              View Task
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          
        </ul>

      </div>
      </nav>
    )
}

export default Navbar