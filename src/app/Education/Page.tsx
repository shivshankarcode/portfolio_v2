"use client";
import { GraduationCap } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "National Institute of Technology, Warangal",
    duration: "Oct 2021 - Aug 2024",
    description:
      "Focused on advanced software development principles, database management, and network security. Completed a thesis on machine learning applications in web development.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Magadh University, Bodh Gaya",
    duration: "April 2017 - Dec 2020",
    description:
      "Gained a strong foundation in core computer science concepts including data structures, algorithms, and object-oriented programming. Actively participated in coding clubs and hackathons.",
  },
];
const Page: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Education</h2>
      <div className="relative border-l-4 border-blue-500 ml-5 md:mx-10">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
              <GraduationCap size={16} />
            </span>
            <div className="bg-white shadow-md rounded-lg p-5 mx-6  ">
              <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
              <p className="text-sm text-gray-500 italic">{item.duration}</p>
              <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Page;
