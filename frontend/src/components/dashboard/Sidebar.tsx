import Link from 'next/link';
import {
  BsBarChart,
  BsCalendarWeek,
  BsFileEarmark,
  BsGrid,
  BsPerson,
  BsPlusCircle,
  BsQuestionCircle,
  BsStickies,
} from 'react-icons/bs';

import Logo from '../../assets/images/temp-logo.svg';

const Sidebar = () => {
  return (
    <div className="min-h-screen flex-1 bg-primary shadow-md">
      <div className="items flex h-12 justify-center">
        <Link href="/dashboard">
          <a className="mb-4 flex items-center font-medium text-gray-900 md:mb-0 lg:justify-center">
            <img
              className="w-8 cursor-pointer"
              src={Logo.src}
              alt="triage logo"
            />
            <span className="ml-2 font-Poppins text-xl font-bold text-white">
              triage
            </span>
          </a>
        </Link>
      </div>
      <hr className="h-0 border" />
      <div className="list-none pl-2 font-Arimo">
        <ul>
          <li className="flex cursor-pointer items-center bg-accent p-1 transition duration-300 ease-in-out hover:bg-accent-light">
            <BsPlusCircle className="text-white" size={20} />
            <span className="ml-3 text-lg">Add Report</span>
          </li>
          <p className="mt-4 mb-1 text-base text-gray-500">DATA</p>
          <Link href="/dashboard">
            <li className="flex cursor-pointer items-center p-1 transition duration-300 ease-in-out hover:bg-accent">
              <BsGrid className="text-white" size={20} />
              <span className="ml-3 text-lg">Overview</span>
            </li>
          </Link>
          <Link href="/analysis">
            <li className="flex cursor-pointer items-center p-1 transition duration-300 ease-in-out hover:bg-accent">
              <BsBarChart className="text-white" size={20} />
              <span className="ml-3 text-lg">Analysis</span>
            </li>
          </Link>
          <Link href="/reports">
            <li className="flex cursor-pointer items-center p-1 transition duration-300 ease-in-out hover:bg-accent">
              <BsFileEarmark className="text-white" size={20} />
              <span className="ml-3 text-lg">Reports</span>
            </li>
          </Link>
          <p className="mt-4 mb-1 text-base text-gray-500">USER</p>
          <Link href="/calendar">
            <li className="flex cursor-pointer items-center p-1 transition duration-300 ease-in-out hover:bg-accent">
              <BsCalendarWeek className="text-white" size={20} />
              <span className="ml-3 text-lg">Calendar</span>
            </li>
          </Link>
          <Link href="/notes">
            <li className="flex cursor-pointer items-center p-1 transition duration-300 ease-in-out hover:bg-accent">
              <BsStickies className="text-white" size={20} />
              <span className="ml-3 text-lg">Notes</span>
            </li>
          </Link>
          <Link href="/profile">
            <li className="flex cursor-pointer items-center p-1 transition duration-300 ease-in-out hover:bg-accent">
              <BsPerson className="text-white" size={20} />
              <span className="ml-3 text-lg">Profile</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="absolute left-0 bottom-0 cursor-pointer p-3">
        <Link href="/faq">
          <BsQuestionCircle className="text-white" size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
