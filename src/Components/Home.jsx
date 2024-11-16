import React, { useState } from "react";
import { motion } from "framer-motion";
import svnitmap from "../../public/svnitmap.jpg";
import location from "../../public/location.png";
import "../CSS/style.css";

const Home = () => {
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const toggleImageFullScreen = () => {
    setIsImageFullScreen((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Your Campus Hub</h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay connected, informed, and engaged with everything happening on campus.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 text-lg bg-blue-500 text-white rounded-lg shadow-lg">
              Explore Events
            </button>
            <button className="px-4 py-2 text-lg border border-blue-500 text-blue-500 rounded-lg">
              Access Resources
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stay Updated</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded flex-grow"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Subscribe</button>
          </div>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 relative max-w-2xl mx-auto overflow-hidden"
      >
        {/* Map Image */}
        <img
          src={svnitmap}
          alt="SVNIT Map"
          className="cursor-pointer w-full rounded-lg"
          onClick={toggleImageFullScreen}
        />

        {/* Location Icon */}
        <img
          src={location}
          alt="Location Icon"
          className="absolute"
          style={{
            bottom: "29%",
            left: "38%",
            width: "30px",
            animation: "bounce 1s infinite",
          }}
        />
      </motion.div>

      {isImageFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-30 flex justify-center items-center"
          onClick={toggleImageFullScreen}
        >
          {/* Full Screen Map */}
          <img
            src={svnitmap}
            alt="Full Screen Map"
            className="max-w-full max-h-full"
          />
          {/* Location Icon on Full Screen */}
          <img
            src={location}
            alt="Location Icon"
            className="absolute"
            style={{
              bottom: "29%",
              left: "41%",
              width: "40px",
              animation: "bounce 1s infinite",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
