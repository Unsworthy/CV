import { Card } from "flowbite-react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import pp from "../assets/pp.jpg";

const Profile = () => {
  return (
    <Card className="max-w-full m-5 bg-gradient-to-r from-gray-100 to-gray-200 shadow-xl dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 transition-transform duration-500 hover:scale-105">
      <div className="flex flex-col items-center pb-10 space-y-5">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            alt="Profile Image"
            src={pp}
            className="w-24 h-24 mb-3 rounded-full shadow-lg border-4 border-blue-500 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Rijal Kamal Kadi
          </h3>
          <span className="text-md text-gray-500 dark:text-gray-400 italic">
            Junior Software Engineer
          </span>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-500" />
            <h4 className="text-xl font-medium text-gray-900 dark:text-white">
              +62 821-1798-7453
            </h4>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-500" />
            <h5 className="text-md text-gray-700 dark:text-gray-300">
              raka.prawira@gmail.com
            </h5>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-black dark:text-white" />
            <a
              href="https://github.com/Unsworthy"
              className="text-md text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Unsworthy
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://linkedin.com/in/Unsworthy"
              className="text-md text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/Unsworthy
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Rijal Kamal Kadi. All Rights Reserved.
        </p>
      </div>
    </Card>
  );
};

export default Profile;
