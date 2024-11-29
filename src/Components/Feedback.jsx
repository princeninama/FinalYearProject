import React, { useState } from 'react';
import "../CSS/style.css"; // Assuming a global CSS for shared styles

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [roll_no, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, roll_no, email, feedback });
    alert('Feedback submitted!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-teal-50 to-sky-100 shadow-xl rounded-xl p-8 w-full max-w-lg mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-8 font-serif">
          Feedback Form
        </h2>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold font-serif mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Roll Number Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold font-serif mb-2">
            Institute Roll No
          </label>
          <input
            type="text"
            value={roll_no}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter your roll number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold font-serif mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Feedback Textarea */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold font-serif mb-2">
            Feedback
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
