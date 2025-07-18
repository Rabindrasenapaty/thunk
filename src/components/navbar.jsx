
import React, { useEffect ,useState} from 'react'
import { searchUser } from '../features/userDetailslice';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const alluser = useSelector((state) => state.app.users);
  const [searchData,setsearchData]=useState('')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData])

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:flex space-x-4 items-center">
              <Link
                to="/"
                className="rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Create Post
              </Link>
              <Link
                to="/read"
                className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                All Posts ({alluser.length})
              </Link>

              {/* 🔍 Search Bar */}
              <input
                type="text"
                placeholder="Search posts..."
                onChange={(e)=>setsearchData(e.target.value)}

                className="ml-4 rounded-md px-3 py-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 Mobile View */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Create Post
          </Link>
          <Link
            to="/read"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            All Posts ({alluser.length})
          </Link>

          {/* 🔍 Mobile Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="mt-2 w-full rounded-md px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

