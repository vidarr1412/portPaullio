export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with React.',
      link: 'https://yourportfolio.com',
    },
    {
      title: 'Task Manager',
      description: 'A task tracking app built with the MERN stack.',
      link: 'https://taskmanager.com',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-blue-600">{proj.title}</h3>
            <p className="text-gray-600 mt-2">{proj.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
