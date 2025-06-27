"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "@/components/MyDocument";

const Page: React.FC = () => {
  return (
    <div className=" bg-white py-8">
      <div className="flex items-center justify-center flex-col p-6">
        <h1 className="text-2xl font-bold text-center">Resume Highlight</h1>
        <p className=" font-semibold">Here are some key points from my resume</p>
        <ul className="mt-1 font-normal list-disc list-inside">
          <li>Experienced in full-stack development</li>
          <li>Proficient in React, Node.js, and MongoDB</li>
          <li>Strong problem-solving skills</li>
        </ul>
      </div>
      <div className="flex items-center justify-center mt-4 p-4">
        <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
          Download Resume
        </button>
      </div>
    </div>
  );
};
// ReactDOM.render(<Page />, document.getElementById('root'));

export default Page;
