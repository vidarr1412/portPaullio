import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center md:items-start py-8 md:pl-[50px] gap-10 md:gap-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Image */}
      <motion.div
        className="flex-shrink-0 mx-auto md:mx-0"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/2.png"
          alt="Me"
          className="w-[180px] h-[180px] md:w-[260px] md:h-[340px] rounded-full object-cover border-4 border-blue-400 shadow-lg"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="flex flex-col h-full w-full max-w-2xl md:max-w-4xl px-4 md:px-0"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Name and Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-1">
            <span className="text-blue-500"></span>
            Paul Gary Oca
            <span className="text-blue-500"></span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-4">Full-Stack Developer</p>
          <p className="text-gray-500 mb-6">
          </p>
        </motion.div>

        {/* 2x2 Grid for Profile, Awards, Technical Skills, (empty for symmetry) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {/* Profile Info */}
          <motion.div
            className="bg-blue-50 rounded-lg p-4 shadow-sm h-full"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
          >
            <h2 className="font-semibold text-blue-500 text-base mb-2">Profile</h2>
            <div className="text-gray-700 text-sm md:text-base space-y-1">
              <div>
                <span className="font-semibold">Location:</span> Lanao del Norte, Philippines
              </div>
              <div>
                <span className="font-semibold">Graduated:</span> Mindanao State University - Iligan Institute of Technology
              </div>
              <div>
                <span className="font-semibold">Course:</span> BS Information Technology - Major in Database
              </div>
              <h2 className="font-semibold text-blue-500 text-base mb-2">Awards</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
                <li>Dean’s Lister (2022-2024)</li>
                <li>Best Capstone Project Award (2024)</li>
              </ul>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="bg-blue-50 rounded-lg p-4 shadow-sm h-full"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
          >
            <h2 className="font-semibold text-blue-500 text-base mb-2">Technical Skills</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {/* Add your skill badges here if needed */}
            </div>
            <div className="flex gap-4 text-2xl md:text-3xl text-blue-500 mt-2">
              <div className="space-y-3 mt-2 w-full md:w-[90%]">
                {[
                  { name: "HTML5", icon: <FaHtml5 />, level: 9 },
                  { name: "CSS3", icon: <FaCss3Alt />, level: 8 },
                  { name: "JavaScript", icon: <FaJs />, level: 10 },
                  { name: "React", icon: <FaReact />, level: 9 },
                  { name: "Node.js", icon: <FaNodeJs />, level: 8 },
                  // Add more skills as needed
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="flex items-center gap-2 text-blue-700 text-sm font-medium">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-xs text-blue-700 font-semibold">{skill.level}/10</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Empty card for symmetry */}
          <div className="h-full"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
