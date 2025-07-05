import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'album', label: 'Album' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-blue-600">MyPortfolio</h1>

      {/* Hamburger button for small screens */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        ☰
      </button>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-4">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="px-3 py-2 rounded text-gray-700 hover:text-blue-500 transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block px-4 py-2 text-gray-700 hover:text-blue-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
