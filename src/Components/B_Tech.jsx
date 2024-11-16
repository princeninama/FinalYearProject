import React from "react";

const BTech = () => {
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const courses = ["C++ Course", "Java Course", "Python Course", "JavaScript Course"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-10">
        B.Tech Program Resources
      </h1>

      {/* Year Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {years.map((year, index) => (
          <div
            key={index}
            className="w-64 p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h2 className="text-center text-2xl font-semibold text-blue-700 mb-4">
              {year}
            </h2>
            <p className="text-center text-gray-500">
              Explore resources and guides tailored for {year}.
            </p>
          </div>
        ))}
      </div>

      {/* Course Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-64 p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h2 className="text-center text-2xl font-semibold text-blue-700 mb-4">
              {course}
            </h2>
            <p className="text-center text-gray-500">
              Learn everything you need to excel in {course}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BTech;
