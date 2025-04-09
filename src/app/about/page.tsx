import Image from "next/image";
import React from "react"
import photo from '../../../public/photo.png';
const Page: React.FC = () => {
    return (
        <div className="bg-white text-black p-5">
            
        <div className="flex flex-col md:flex-row items-center justify-center h-fit p-10 gap-10">
        <Image src={photo} width={200} height={200} alt="Developer" className="rounded-full bg-[#4e3ba55e] "/>
            <div className="text-start  ">
            <h2 className="text-5xl font-semibold">About Me</h2>
            <p className="mt-4 text-lg">I am a passionate software engineer with a strong background in full-stack web development. I enjoy building innovative solutions and continuously learning new technologies.</p>
            </div>
        </div>
        </div>
    )
}
export default Page;