"use client";
import intro_photo from "../../images/home_image.webp";
import Image from "next/image";
export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#0d1738] to-[#504ba7]  text-white h-fit p-5 rounded-tr-2xl ">
      <div className="flex flex-wrap md:flex-row items-center justify-center h-fit md:p-10 p-10 pt-20 gap-10">
        <div className="text-start  ">
          <h2 className="text-5xl font-semibold">HI, I`{`&apos`}m`</h2>
          <h1 className="text-6xl font-bold">Shivshankar Kumar</h1>
          <h3 className="mt-4 text-3xl">Software Engineer</h3>
          <p className="mt-4 text-lg">I build full-stack web application</p>
          <div className=" md:flex flex-col md:flex-row mt-6 space-x-4">
            <button className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ">
              View Projects
            </button>
            <button className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
              View Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center pl-10">
          <Image
            src={intro_photo}
            alt="Hero"
            width={400}
            height={400}
            className="invert-100  hidden md:block "
          />
        </div>
      </div>
    </div>
  );
}
