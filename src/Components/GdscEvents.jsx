import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import infosession from "/gdsc_info.jpeg"
import hackathons from "/gdsc_hackathons.jpeg";
import workshops from "/gdsc_workshops.jpeg";
import quizzes from "/gdsc_quiz.jpeg";

const EventDetails = [
  {
    title: "Info Sessions",
    date: "Ongoing",
    description:
      "Provide a step-to-step guide on approaching any tech stack or a range of topics.",
    image: infosession,
  },
  {
    title: "Hackathons",
    date: "Multiple Dates",
    description:
      "Conduct challenging hackathons comprising amazing judges and a lot of webinars!",
    image: hackathons,
  },
  {
    title: "Hands-on Workshops",
    date: "Ongoing",
    description:
      "The real fun where the members will show you how to proceed on different app creation.",
    image: workshops,
  },
  {
    title: "Kahoot Quizzes",
    date: "Monthly",
    description:
      "Filled with technical quizzes and prizes! Test how much knowledge you actually have.",
    image: quizzes,
  },
];

const GdscEvents = () => {
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
      className="relative min-h-screen bg-blue-50  p-8 overflow-hidden text-white"
    >
      {/* Title */}
      <div className="text-center mb-12 text-black">
        <h2 className="text-4xl font-bold tracking-wide">GDSC Events</h2>
        <p className="text-lg mt-2 font-light">Explore our exciting events and workshops!</p>
      </div>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200">
        {/* Growing Line */}
        <motion.div
          className="absolute left-0 w-1 bg-blue-500"
          style={{ height: `${lineHeight}px` }}
          animate={{ height: lineHeight * 2 }}
        />
      </div>

      {/* Event List */}
      <div className="max-w-5xl mx-auto space-y-12">
        {EventDetails.map((event, index) => (
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
              } bg-white shadow-lg rounded-lg p-6 max-w-lg hover:shadow-xl transition-shadow duration-300`}
              style={{
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 !== 0 ? "20px" : "0",
              }}
            >
              {/* Event Image */}
              <div className="flex-shrink-0 aspect-w-1 aspect-h-1 w-32">
                {/* Replace image placeholder with actual image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-contain rounded-md"
                />
              </div>

              {/* Event Details */}
              <div className="flex-grow md:ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
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

export default GdscEvents;
