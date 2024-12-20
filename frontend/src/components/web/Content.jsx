import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
export default function Content() {


  const Aptitude = lazy(() => import('./content/Aptitude'));
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
        return <Suspense fallback={<><CircularProgress size={"15px"} /></>}><Aptitude/></Suspense>;
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
    <section className="pb-6 bg-gray-100">
      <div className="flex flex-col ">
        <h2 className="text-3xl font-sans lg:px-10 px-4 mt-5 font-bold text-gray-900 leading-[3.25rem] mb-2 lg:max-w-3xl">
          One Platform with all Solutions
        </h2>
        <div className="flex lg:px-10 pb-3 px-4 lg:overflow-hidden overflow-y-hidden overflow-x-scroll text-nowrap  gap-6">
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
        <div className="">
        
          <div className="text-gray-700">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}
