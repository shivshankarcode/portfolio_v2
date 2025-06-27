"use client";
import React from "react";
import toast from "react-hot-toast";
const Page: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    setEmail("");
    setName("");
    setMessage("");
    toast.success("Email sent successfully!");
    if (res.ok) {
      toast.success("Email sent successfully!");
    } else {
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <div className=" bg-gradient-to-tr from-[#0d1738] to-[#504ba7]  flex items-center justify-center p-6 py-8 md:py-24">
      <div className=" bg-gradient-to-tr from-[#0d1738] to-[#504ba7] shadow-lg rounded-lg p-6 max-w-md w-full bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Get In Touch
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="e.g. Shivshankar Kumar"
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-[#504ba7]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. shiv@example.com"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-[#504ba7]" 
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-[#504ba7]"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
