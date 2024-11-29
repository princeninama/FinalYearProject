import React from "react";
import { Link, Outlet } from "react-router-dom";
const ResourceLibrary = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-x-20">
        {/* Card for B_Tech */}
          <Link to="/btech">
        <div className="group h-40 w-40 bg-gradient-to-br from-cyan-200 to-sky-100 flex justify-center items-center hover:w-60 hover:h-60 transition-all duration-500 ease-in-out rounded-lg shadow-lg transform hover:scale-110">
          <div className=" text-3xl text-black font-serif group-hover:text-4xl transition-all duration-300">
            
          B_Tech
            
          </div>
        </div>
            </Link>

        {/* Card for M_Tech */}
        <div className="group h-40 w-40 bg-gradient-to-br from-sky-100 to-cyan-200 flex justify-center items-center hover:w-60 hover:h-60 transition-all duration-500 ease-in-out rounded-lg shadow-lg transform hover:scale-110">
          <div className="text-black text-3xl font-serif group-hover:text-4xl transition-all duration-300">
            M_Tech
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
