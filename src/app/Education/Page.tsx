'use client'
const Page:React.FC=()=>{
    return (
        <div>
            <div className="bg-white text-black md:flex flex-row items-center justify-center shadow-md hover:shadow-lg md:px-16 px-5 py-5 gap-10">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold">Degree 1</h3>
                        <p>Institution Name</p>
                        <p>Year of Graduation</p>
                    </div>
                    <div className="bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold">Degree 2</h3>
                        <p>Institution Name</p>
                        <p>Year of Graduation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page;