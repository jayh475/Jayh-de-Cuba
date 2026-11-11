import {
  FaCode,
  FaPencilRuler,
  FaSalesforce,
  FaRegNewspaper,
  FaHeadset,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function PopularCategories() {
  return (
    <div className="bg-white my-7 mx-6 shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
      <ul className="list-none space-y-3">
        <li className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <FaCode className="text-blue-500 mr-2" />
            <span>Programming</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <FaPencilRuler className="text-blue-500 mr-2" />
            <span>Design & Media</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <FaSalesforce className="text-blue-500 mr-2" />
            <span>Sales & Marketing</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <FaRegNewspaper className="text-blue-500 mr-2" />
            <span>Writing & Content</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <FaHeadset className="text-blue-500 mr-2" />
            <span>Customer Service</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            {/* Use a generic icon or text for 'All job categories' */}
            <span className="text-blue-500 mr-2">...</span>
            <span>All job categories</span>
          </div>
          <IoIosArrowForward />
        </li>
      </ul>
    </div>
  );
}
