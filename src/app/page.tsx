import Home from "./Home/Page";
import About from "./about/page";
import Project from "./project/page";
import Education from "./Education/Page";
import TechStack from "./TechStack/Page";
export default function page() {
  return (
    <div className="bg-gradient-to-tr  to-[#3c3885] from-[#0d1738] h-full px-4 md:px-16">
      <Home/>
      <About/>
      <TechStack />
      <Project  />
      <Education />
      
  </div>
  );
}
