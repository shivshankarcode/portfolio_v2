import Image from "next/image";
import business_card from "../../public/business name generator.png";

export default function ProjectCard() {
  return (
    <div>
      <div className="bg-white text-black p-5 m-5 md:m-0 flex flex-col items-center gap-10 justify-center rounded-lg shadow-2xl md:hover:shadow-lg md:hover:scale-105 transition-transform duration-300">
        <div className=" font-semibold text-2xl p-5">Project Name</div>
        <div>
          <Image
            src={business_card}
            alt="project screenshort"
            width={300}
            className=""
          />
        </div>
        <div className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae
          soluta consequatur, voluptas magni sint?
        </div>
        <div className=" ">
          <span className="m-2 p-2 bg-gray-300 rounded-md">Next.js</span>
          <span className="p-2 m-2 bg-gray-300 rounded-md ">Gemini API</span>
          <span className="p-2 m-2 bg-gray-300 rounded-md block">Tailwind CSS</span>
        </div>
        <div className="flex flex-col md:flex-row mt-6 space-x-4">
          <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ">
            Live Demo
          </button>
          <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
