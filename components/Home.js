import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-8 md:pl-[50px] gap-10">
      {/* Left Image */}
      <div className="flex-shrink-0 mx-auto md:mx-0 -mt-6">
        <img
          src="/2.png"
          alt="Me"
          className="w-[300px] h-[500px] rounded-bl-[10px]"
        />
      </div>

      {/* Right Content */}
      <div className="text-left max-w-md px-4 md:px-0">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500 mr-1">&lt;</span>
          John Doe
          <span className="text-blue-500 ml-1">&gt;</span>
        </h1>

        <p className="text-gray-600 mt-2">Full-Stack Developer</p>

        <div className="flex gap-5 mt-6 text-3xl text-blue-500">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaNodeJs />
        </div>

        <p className="mt-6 text-gray-500">
          Passionate developer crafting modern, responsive web applications. Experienced in React, Node, and RESTful APIs.
        </p>
      </div>
    </div>
  );
}
