export const metadata = {
  title: "About Us | Task Manager",
  description: "Learn more about the Task Manager application",
};

export default function AboutPage() {
  return (
    <main
      className="
        min-h-[calc(100vh-85px)]
        pt-10
        px-4
        bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600
      "
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1
          className="
            text-4xl font-extrabold mb-6
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent text-center
          "
        >
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Task Manager</strong> is a simple and efficient web application
          designed to help users organize their daily tasks and improve productivity.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Create and manage tasks easily</li>
            <li>Mark tasks as completed or pending</li>
            <li>View task details clearly</li>
            <li>Delete tasks when no longer needed</li>
            <li>Clean and responsive user interface</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide a lightweight and intuitive task management
            solution that helps users stay organized without unnecessary complexity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to continuously enhance Task Manager with useful features while
            keeping the experience simple and user-friendly for everyone.
          </p>
        </section>
      </div>
    </main>
  );
}
