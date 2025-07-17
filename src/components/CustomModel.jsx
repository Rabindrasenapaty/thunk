import React from 'react';
import { useSelector } from 'react-redux';

const CustomModal = ({ id, showpop, setshowpop }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleuser = allusers.filter((user) => user.id === id);
  const user = singleuser[0];

  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 text-gray-800 animate-fade-in border border-indigo-100">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
          onClick={() => setshowpop(false)}
          title="Close"
        >
          &times;
        </button>

        {/* Name Header */}
        <h2 className="text-4xl font-black text-center mb-8 text-indigo-700 tracking-wide">
          {user.name}
        </h2>

        {/* User Info Section */}
        <div className="space-y-6 text-lg px-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Email:</span>
            <span className="text-gray-900">{user.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Age:</span>
            <span className="text-gray-900">{user.age}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Gender:</span>
            <span
              className={`font-bold ${
                user.gender === 'male' ? 'text-blue-600' : 'text-pink-600'
              }`}
            >
              {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
