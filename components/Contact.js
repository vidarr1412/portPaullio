import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your message, ${form.name}!`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Send Message
        </button>
      </form>

      <div className="text-center space-x-4 text-blue-600 mt-6">
        <a href="mailto:you@example.com">Email</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
