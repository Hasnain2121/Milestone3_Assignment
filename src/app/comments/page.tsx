"use client";

import { useState, FormEvent } from "react";

export default function CommentSection() {
  // Define state for comments, name, and comment input
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Check if inputs are not empty
    if (name.trim() && comment.trim()) {
      setComments((prevComments) => [...prevComments, { name, comment }]); // Update comments
      setName(""); // Clear name input
      setComment(""); // Clear comment input
    }
  };

  return (
    <section className="bg-white text-black py-32">
      <div className="container mx-auto px-4 max-w-md  ">
        <h2 className=" min-h-14 text-2xl font-bold text-center mt-14">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-center text-gray-400 mb-4">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="space-y-4 mb-4">
            {comments.map((c, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-sm text-blue-400 font-semibold">{c.name}</p>
                <p className="text-gray-300 mt-1">{c.comment}</p>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-white border  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 bg-white border  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-gray-100 py-2 rounded-lg hover:bg-black transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>
    </section>
  );
}
