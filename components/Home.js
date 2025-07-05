import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <img src="/assets/2.jpg" alt="Me" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl font-bold">John Doe</h1>
      <p className="text-gray-600 mt-2">Full-Stack Developer</p>

      <div className="flex gap-5 mt-6 text-3xl text-blue-500">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />
      </div>

      <p className="mt-6 max-w-xl text-gray-500">
        Passionate developer crafting modern, responsive web applications. Experienced in React, Node, and RESTful APIs.
      </p>
    </div>
  );
}
