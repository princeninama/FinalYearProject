import React from "react";

const BTech = () => {
  const years = [
    { "1st Sem": "https://drive.google.com/drive/folders/1rELKT-hZNIrFOzR4-mTAN4Q1PUvnmLo_?usp=drive_link" },
    { "2nd sem": "https://drive.google.com/drive/folders/1gnxNxQv4XKC5_wutKwMaKArZaCiF34K5?usp=drive_link" },
    { "3rd sem": "https://drive.google.com/drive/folders/1qaYRPfkFQp_zM4pN3vIrcA8oisftMfX5?usp=drive_link" },
    { "4th sem": "https://drive.google.com/drive/folders/1u5naHYHV5YuYxfcnrVJgwCycCbGrYJkQ?usp=drive_link" },
    { "5th sem": "" },
    { "6th sem": "" },
    { "7th sem": "" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-10">
        B.Tech Program Resources
      </h1>

      {/* Year Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {years.map((year, index) => {
          const [semester, link] = Object.entries(year)[0];
          // const href = link === "" ? "#" : link; // Ensure no empty links

          return (
            <a
              href={link}
              key={index} // Key should be here
              className="w-64 p-6 bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div>
                <h2 className="text-center text-2xl font-semibold text-blue-700 mb-4">
                  {semester}
                </h2>
                {link===""? <p className="text-center text-gray-500">
                  Available soon!
                  Stay Tune for updates.
                </p>:
                <p className="text-center text-gray-500">
                Explore resources and guides tailored for {semester}.
              </p>}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BTech;
