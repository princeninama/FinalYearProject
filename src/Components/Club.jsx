import React from "react";
import { Link } from "react-router-dom";

const Clubs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-800">
        Welcome to the Computer Science Clubs.
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12">
        Explore our amazing clubs and take your skills to the next level!
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* NEXUS Card */}
        <Link
          to="/nexus"
          className="max-w-xs bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-900 text-center">
            NEXUS
          </h2>
          <p className="text-sm text-gray-600 text-center mt-4">
            Join NEXUS for coding challenges and workshops to enhance your
            skills!
          </p>
        </Link>

        {/* GDSC Card */}
        <Link
          to="/gdsc"
          className="max-w-xs bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-900 text-center">
            GDSC
          </h2>
          <p className="text-sm text-gray-600 text-center mt-4">
            Be a part of GDSC to learn Google Developer tools and build
            impactful projects.
          </p>
        </Link>

        {/* ACM Card */}
        <Link
          to="/acm"
          className="max-w-xs bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-900 text-center">
            ACM
          </h2>
          <p className="text-sm text-gray-600 text-center mt-4">
            Join ACM for tech talks, hackathons, and to network with like-minded
            individuals.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Clubs;
