"use client";
const Page: React.FC = () => {
  return (
    <div className=" bg-white  h-fit p-10 flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="bg-white text-black shadow-md hover:shadow-lg  ">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className=" p-5 ">
            <div className="flex flex-row gap-5 m-10">
            <div>2024</div>
          <div className="bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Degree 1</h3>
            <p>Institution Name</p>
            <p>Year of Graduation</p>
          </div>
          </div>
          <div className="flex flex-row gap-5 m-10">
            <div>2020</div>
            <div className="bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Degree 2</h3>
            <p>Institution Name</p>
            <p>Year of Graduation</p>
          </div>
          </div>
         
        </div>
      </div>
      <div className="bg-white text-black shadow-md hover:shadow-lg  ">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className=" p-5 ">
            <div className="flex flex-row gap-5 m-10">
            <div className="">2024</div>
          <div className="bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Degree 1</h3>
            <p>Institution Name</p>
            <p>Year of Graduation</p>
          </div>
          </div>
          <div className="flex flex-row gap-5 m-10">
            <div>2020</div>
            <div className="bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Degree 2</h3>
            <p>Institution Name</p>
            <p>Year of Graduation</p>
          </div>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};
export default Page;
