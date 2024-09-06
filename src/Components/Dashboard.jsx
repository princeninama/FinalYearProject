import React, { useState } from "react";
import { Link } from "react-router-dom";
import robot from "/robot.png";
const Dashboard = () => {

  const [isBotPage, setIsBotPage] = useState(false);
  if(window.location.pathname === "/chatbot"){
    setIsBotPage(true);
  }

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <nav className="bg-white w-full shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* <h3 className="text-xl font-bold text-gray-800">Campus Dashboard</h3> */}
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/map" className="hover:text-blue-500">
                Campus Map
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-blue-500">
                Events
              </Link>
            </li>
            <li>
              <Link to="/professors" className="hover:text-blue-500">
                Professors
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:text-blue-500">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-blue-500">
                Resource Library
              </Link>
            </li>
            {/* <li>
              <Link to="/news" className="hover:text-blue-500">News</Link>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* <main className="flex-grow container mx-auto px-4 mt-8 text-center">
        <p className="text-lg text-gray-700">Hello, your content goes here!</p>
      </main> */}
      { !isBotPage && <div className="h-56 absolute bottom-0 right-5 w-56 rounded-full bg-black">
        <Link to={"/chatbot"}>
          <img src={robot} alt="robot" className="rounded-full object-fit" />
        </Link>
      </div>}
    </div>
  );
};

export default Dashboard;
