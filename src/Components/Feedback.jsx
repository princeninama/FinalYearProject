import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, feedback });
    alert('Feedback submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-y-4 py-8 sm:py-12 bg-gray-400">
        <h2 className="font-bold text-3xl sm:text-4xl font-serif mb-6">Feedback Form</h2>

        <label className="w-full sm:w-3/4 lg:w-2/3 mb-4">
          <span className="block mb-2 font-medium">Name:</span>
          <input
            type="text"
            className="border-2 border-black rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="w-full sm:w-3/4 lg:w-2/3 mb-4">
          <span className="block mb-2 font-medium">Email:</span>
          <input
            type="email"
            className="border-2 border-black rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="w-full sm:w-3/4 lg:w-2/3 mb-4">
          <span className="block mb-2 font-medium">Feedback:</span>
          <textarea
            className="border-2 border-black rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="hover:bg-blue-400 bg-blue-600 px-6 py-3 rounded-xl text-white mt-6 transition-all duration-200 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
