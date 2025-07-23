export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 mt-20">
      <h2 className="text-3xl font-bold mb-6 -mt-40">Experience</h2>

      <div className="space-y-6 max-w-lg">
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Frontend Developer - TechCorp</h3>
          <p className="text-gray-600">Built responsive UIs using React and Tailwind CSS.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Full Stack Developer - DevSolutions</h3>
          <p className="text-gray-600">Developed backend APIs with Node.js and Express.</p>
        </div>
      </div>
    </div>
  );
}
