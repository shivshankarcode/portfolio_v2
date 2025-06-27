"use client";
import { Eye, Code } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import project1 from '../../images/Ecom.png';
import project2 from '../../images/task.png';
import project3 from '../../images/portfolio.png';


type Project = {
  image:  StaticImageData ; // Use StaticImageData for local images or string for remote URLs
  title: string;
  description: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    image: project1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, shopping cart, user authentication, and payment gateway integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    image: project2,
    title: "Task Management App",
    description:
      "A collaborative task management application that allows users to create, assign, and track tasks within teams.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    image: project3,
    title: "Personal Portfolio",
    description:
      "This very portfolio website, designed to showcase my skills and projects. Built with a focus on clean design and responsiveness.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
  },
];

const Page: React.FC = () => {
  return (
    <div className="bg-white text-black md:flex flex-row items-center justify-center shadow-md hover:shadow-lg md:px-16 px-5 py-5 gap-10">
      <h2></h2>
      <section className="bg-white py-12 px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">
          My Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 group ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col justify-between md:hover:scale-105 transition-transform duration-300 ease-in-out md:group-hover:scale-98" 
            >
            
             <Image
            src={project.image}
            alt={project.title}
            // width={300}
            className="rounded-md mb-4 h-48 object-cover w-full"
          />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-end space-x-4 text-indigo-500">
                <Code
                  className="cursor-pointer hover:text-indigo-700"
                  size={18}
                />
                <Eye
                  className="cursor-pointer hover:text-indigo-700"
                  size={18}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Page;
