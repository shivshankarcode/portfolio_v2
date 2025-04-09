import Navbar from "./Navbar";

import intro_photo from "../../public/intro_photo.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#0d1738] to-[#504ba7]  text-white h-fit p-5 rounded-tr-2xl ">
      {/* <Navbar /> */}
      <div className="flex flex-wrap md:flex-row items-center justify-center h-fit p-10">
        <div className="text-start  ">
          <h2 className="text-5xl font-semibold">HI, I'm</h2>
          <h1 className="text-5xl font-bold">Shivshankar Kumar</h1>
          <h3 className="mt-4 text-3xl">Software Engineer</h3>
          <p className="mt-4 text-lg">I build full-stack web application</p>
          <div className="hidden md:flex flex-col md:flex-row mt-6 space-x-4">
            <button className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ">
              View Projects
            </button>
            <button className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
              Contact Me
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <Image
            src={intro_photo}
            alt="Hero"
            width={500}
            height={500}
            className=" "
          />
        </div>
        <div className="md:hidden flex flex-wrap items-center justify-center mt-6 space-x-4 ">
            <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ">
              View Projects
            </button>
            <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
              Contact Me
            </button>
          </div>
      </div>
    </div>
  );
}
