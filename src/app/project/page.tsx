import ProjectCard from "@/components/ProjectCard";

const Page:React.FC=()=>{
    return(
        <div className="bg-white text-black md:flex flex-row items-center justify-center shadow-md hover:shadow-lg md:px-16 px-5 py-5 gap-10">
            <h2></h2>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}
export default Page;