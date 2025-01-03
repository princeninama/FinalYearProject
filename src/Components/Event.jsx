import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gitandgithub from "/gitandgithub.png";
import teacher_day from "/teacher's_day.jpg";
import codesprinter from "/codesprint.jpg";
import fiesta from "/fiesta.png";
import nexus from "/nexus.png";
import web_wonder from "/web_wonder.jpeg";

const events = [
  {
    date: "May 2023",
    title: "Git and GitHub Workshop",
    description:
      "Git and GitHub Workshop designed for junior participants to teach them the basics of version control using Git and collaboration using GitHub.",
    image: gitandgithub,
  },
  {
    date: "September 2023",
    title: "Teachers Day Celebration",
    description:
      "Teachers Day Celebration is a special event organized by the CSE department to honor and appreciate the hard work and dedication of our esteemed faculty members.",
    image: teacher_day,
  },
  {
    date: "Every Sunday",
    title: "CodeSprint",
    description:
      "CodeSprint by Nexus is a fast-paced coding contest for CSE students. It challenges participants with time-bound algorithmic problems, promoting skill enhancement and problem-solving.",
    image: codesprinter,
  },
  {
    date: "September 2023",
    title: "Fiesta",
    description: "Fiesta is an exciting sport event organized for the entire CSE department.",
    image: fiesta,
  },
  {
    date: "October 2024",
    title: "Test",
    description: "Testing",
    image: nexus,
  },
  {
    date: "June-July 2023",
    title: "Web Wonder",
    description:
      "Web Wonder is an event organized during the summer for 2nd-year students.",
    image: web_wonder,
  },
];

const NexusEvents = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPosition = window.scrollY - container.offsetTop;
        const containerHeight = container.offsetHeight;
        const newHeight = Math.min(scrollPosition, containerHeight);
        setLineHeight(newHeight > 0 ? newHeight : 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8 overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Nexus Events
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200">
        <motion.div
          className="absolute left-0 w-1 bg-blue-500"
          style={{ height: `${lineHeight}px` }}
          animate={{ height: lineHeight * 2 }}
        />
      </div>

      {/* Events List */}
      <div className="max-w-5xl mx-auto space-y-12">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            {/* Event Card */}
            <div
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "text-right" : "text-left"
              } bg-white shadow-2xl rounded-lg p-8 max-w-lg transition-all duration-300 transform hover:scale-105`}
              style={{
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 !== 0 ? "20px" : "0",
              }}
            >
              {/* Event Image */}
              <div className="flex-shrink-0 aspect-w-1 aspect-h-1 w-40 md:w-48 mb-6 md:mb-0 mx-auto md:mx-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover rounded-md shadow-md"
                />
              </div>

              {/* Event Details */}
              <div className="flex-grow md:ml-6">
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                <p className="text-gray-700 mt-4">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NexusEvents;
