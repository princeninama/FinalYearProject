import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "./Chatbot";
import robot from "/robot.png";
import "../CSS/style.css";

const Button = ({ children, size, className, onClick }) => (
  <button
    className={`px-4 py-2 rounded ${
      size === "lg" ? "text-lg" : "text-base"
    } bg-blue-500 text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Dashboard = () => {
  const [isBot, setIsBot] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (e) => {
      if (chatbotRef.current && !chatbotRef.current.contains(e.target)) {
        setIsBot(false);
      }
    };

    document.addEventListener("click", handleOutClick);
    return () => {
      document.removeEventListener("click", handleOutClick);
    };
  }, []);

  const handleBotClick = (e) => {
    e.stopPropagation();
    setIsBot(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white w-full shadow-md py-4 fixed top-0 z-10"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-blue-600"
          >
            DOCSE Dashboard
          </motion.h1>
          <Link to="/" className="hover:text-blue-500 transition-colors">
           <Dashboard/>
          </Link>
          <ul className="flex space-x-6 text-gray-700">
            {["Events", "Professors", "Feedback", "Resources"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </div>
      </motion.nav>

      {/* ChatBot */}
      <AnimatePresence>
        {isBot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-20"
          >
            <ChatBot ref={chatbotRef} setIsBot={setIsBot} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assistant Button */}
      {!isBot && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="fixed bottom-5 right-5 z-10"
        >
          <Button
            size="lg"
            className="rounded-full p-4 shadow-lg"
            onClick={handleBotClick}
          >
            <img
              src={robot}
              alt="Assistant"
              className="rounded-full h-40 bg-black object-cover"
            />
          </Button>
        </motion.div>
      )}

      {/* Render Children */}
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
