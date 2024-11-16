import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gitandgithub from "../../public/gitandgithub.png"
import teacher_day from "../../public/teacher's_day.jpg"
import codesprinter from "../../public/codesprint.jpg"
import fiesta from "../../public/fiesta.png"
import nexus from "../../public/nexus.png"
import web_wonder from "../../public/web_wonder.jpeg"
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
    description:
      "Fiesta is an exciting sport event organized for the entire CSE department.",
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

const Events = () => {
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
      className="relative min-h-screen bg-gray-50 p-8 overflow-hidden"
    >
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200">
        {/* Growing Line */}
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
            {/* Card */}
            <div
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "text-right" : "text-left"
              } bg-white shadow-lg rounded-lg p-6 max-w-lg`}
              style={{
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 !== 0 ? "20px" : "0",
              }}
            >
              {/* Event Image */}
              <div className="flex-shrink-0 aspect-w-1 aspect-h-1 w-32">
  <img
    src={event.image}
    alt={event.title}
    className="object-contain rounded-md"
  />
</div>

              {/* Event Details */}
              <div className="flex-grow md:ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
