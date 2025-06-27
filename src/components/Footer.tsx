"use client";
const Page: React.FC = () => {
  return (
    <footer className="bg-gray-800  text-white py-6 ">
      <p className="flex items-center justify-center">
        © 2025 SHIVSHANKAR KUMAR. All rights reserved.
      </p>

      <div className="flex items-center justify-center space-x-6 bg-gray-800 text-gray-300 pt-4 text-sm font-medium">
        {/* <!-- LinkedIn --> */}
        <a
          href="https://www.linkedin.com/in/shivshankarcode/"
          target="_blank"
          className="flex items-center gap-1 hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288d1"
              d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
            ></path>
            <path
              fill="#fff"
              d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
            ></path>
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* <!-- GitHub --> */}
        <a
          href="https://github.com/shivshankarcode"
          target="_blank"
          className="flex items-center gap-1 hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582v-2.26c-3.338.725-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.81 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.698.825.58C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>

        {/* <!-- Email --> */}
        <a
          href="mailto:shivshankarcode@email.com"
          className="flex items-center gap-1 hover:text-blue-400"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6L12 13L2 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Email</span>
        </a>
      </div>
    </footer>
  );
};
export default Page;
