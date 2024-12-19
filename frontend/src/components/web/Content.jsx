import React, { useState } from "react";

export default function Content() {
  const [activeLink, setActiveLink] = useState("Aptitude");

  const topics = [
    "Aptitude",
    "Computer Networks",
    "DSA",
    "DBMS",
    "Operating Systems",
    "OOPS",
  ];

  const renderContent = () => {
    switch (activeLink) {
      case "Aptitude":
        return <p>This section covers Aptitude-related problems and solutions.</p>;
      case "Computer Networks":
        return <p>Explore topics on Computer Networks like protocols, IP addressing, etc.</p>;
      case "DSA":
        return <p>Learn about Data Structures and Algorithms to enhance problem-solving skills.</p>;
      case "DBMS":
        return <p>Understand Database Management Systems, SQL, and normalization concepts.</p>;
      case "Operating Systems":
        return <p>Dive into OS concepts like process management, memory management, and more.</p>;
      case "OOPS":
        return <p>Master Object-Oriented Programming concepts and design principles.</p>;
      default:
        return <p>Select a topic to view its content.</p>;
    }
  };

  return (
    <section className="pb-6">
      <div className="flex flex-col lg:px-10 px-4">
        <h2 className="text-2xl font-bold text-gray-900 leading-[3.25rem] mb-4 lg:max-w-3xl">
          One Solution for all the problems
        </h2>
        <div className="flex lg:overflow-hidden overflow-y-hidden overflow-x-scroll text-nowrap py-4 gap-6">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveLink(topic)}
              className={`cursor-pointer hover:border-b-2 hover:border-black  transition ${
                activeLink === topic ? "border-b-2 border-black font-bold" : ""
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {activeLink}
          </h3>
          <div className="text-gray-700">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}
