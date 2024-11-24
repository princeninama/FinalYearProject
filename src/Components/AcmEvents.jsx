import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import summerImage from "../../public/acm_summer.webp";
import dotslashImage from "../../public/acm_dotslash6.jpg";
import epiphanyImage from "../../public/acm_epiphany.jpg";
import inceptionImage from "../../public/acm_inception.jpg";
import codewarsImage from "../../public/acm_codewars.jpg";
import hourofcodeImage from "../../public/acm_hourofcode.jpg";
import opensourceImage from "../../public/acm_opensource.jpg";
import ideathonImage from "../../public/acm_ideathon.jpg";

const EventDetails = [
  {
    title: "Dotslash 7.0",
    date: "January 26, 2024",
    description:
      "Get ready for innovation at its best – Dotslash 7.0 hackathon! Join us as brilliant minds collide, code sparks fly, and groundbreaking ideas come to life.",
    image: dotslashImage,
  },
  {
    title: "Epiphany 13.0",
    date: "January 8, 2024",
    description:
      "An inter-college coding contest to test your programming skills and to push your limits. Get those thinking caps on and prep yourselves up for this amazing contest!",
    image: epiphanyImage,
  },
  {
    title: "Inception 8.0",
    date: "October 28, 2023",
    description:
      "ACM brings to you yet another iteration of one of its most awaited coding events. Join us in solving the most fun and challenging DSA problems.",
    image: inceptionImage,
  },
  {
    title: "CodeWars",
    date: "31st March 2023",
    description:
      "CodeWars is a programming contest held by ACM in association with MINDBEND, which is one of the biggest technical events in Gujarat.",
    image: codewarsImage,
  },
  {
    title: "Hour of Code",
    date: "5th-7th December 2022",
    description:
      "ACM NIT Surat celebrated Computer Science Week by conducting the Hour of Code event, visiting schools and educating over 500 students on CS basics like HTML, CSS, and career opportunities.",
    image: hourofcodeImage,
  },
  {
    title: "Open Source Workshop",
    date: "9th October 2023",
    description:
      "ACM NIT Surat hosted a workshop on Git/Github and open-source contributions, with 57 attendees learning Git commands, Github mechanics, and Hacktoberfest insights.",
    image: opensourceImage,
  },
  {
    title: "Summer Challenge",
    date: "8th July - 10th August 2023",
    description:
      "A 30-day coding challenge to teach data structures, algorithms, and programming to young computer science enthusiasts. Participants worked through problem sets and live solutions.",
    image: summerImage,
  },
  {
    title: "SIH Faculty Mentorship",
    date: "16th September 2023",
    description:
      "ACM NIT Surat and DSC NIT Surat conducted a mentorship session to help the top-30 teams for SIH, providing them with valuable feedback to improve their pitches and ideas.",
    image: ideathonImage,
  },
];

const AcmEvents = () => {
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
      className="relative min-h-screen bg-blue-50 p-8 overflow-hidden text-black"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide">ACM Events</h2>
        <p className="text-lg mt-2 font-light text-gray-700">
          Discover exciting coding challenges and events!
        </p>
      </div>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200">
        <motion.div
          className="absolute left-0 w-1 bg-blue-500"
          style={{ height: `${lineHeight}px` }}
        />
      </div>

      {/* Event List */}
      <div className="max-w-5xl mx-auto space-y-12">
        {EventDetails.map((event, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Card */}
            <div
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "text-right" : "text-left"
              } bg-white shadow-lg rounded-lg p-6 max-w-lg transform transition-all duration-300 hover:shadow-2xl`}
              style={{
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 !== 0 ? "20px" : "0",
              }}
            >
              {/* Event Image */}
              <div className="flex-shrink-0 w-32 h-32">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              {/* Event Details */}
              <div className="flex-grow md:ml-4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcmEvents;
