import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailslice';
import CustomModal from './CustomModel';
import { deleteUser } from '../features/userDetailslice';
import { Link } from 'react-router-dom'


const Read = () => {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app)

  const [id, setid] = useState("")
  const [showpop, setshowpop] = useState(false)

  const [filtergender, setfiltergender] = useState('')

  useEffect(() => {
    dispatch(showUser());
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          {/* Loading Text */}
          <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
            Please wait, loading...
          </h2>
        </div>
      </div>
    );
  }




  return (


    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      {/* 🔘 Gender Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">

        <label className="text-gray-700 font-medium">
          <input
            type="radio"
            name="gender"
            value="all"
            checked={filtergender === ""}
            onChange={(e) => setfiltergender(e.target.value)}

            className="mr-2"
          />
          All
        </label>
        <label className="text-gray-700 font-medium">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={filtergender === "male"}
            onChange={(e) => setfiltergender(e.target.value)}

            className="mr-2"
          />
          Male
        </label>
        <label className="text-gray-700 font-medium">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={filtergender === "female"}
            onChange={(e) => setfiltergender(e.target.value)}

            className="mr-2"
          />
          Female
        </label>
      </div>
      {/* ✅ Modal Component */}
      {showpop && <CustomModal id={id} showpop={showpop} setshowpop={setshowpop} />}

      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        User Profiles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users &&
          users.filter((ele) => {
            if (searchData.length === 0) {
              return ele
            }
            else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase())
            }
          })
            .filter((ele) => {
              if (filtergender === "male") {
                return ele.gender === filtergender
              }
              else if (filtergender === 'female') {
                return ele.gender === filtergender
              }
              else {
                return ele
              }
            })

            .map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600 text-sm"><strong>Email:</strong> {user.email}</p>
                <p className="text-gray-600 text-sm"><strong>Age:</strong> {user.age}</p>
                <p className="text-gray-600 text-sm">
                  <strong>Gender:</strong>{' '}
                  <span className={user.gender === 'male' ? 'text-blue-500' : 'text-pink-500'}>
                    {user.gender}
                  </span>
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm shadow"
                    onClick={() => [setid(user.id), setshowpop(true)]}

                  >
                    👁️ View
                  </button>
                  <Link className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md text-sm shadow" to={`/edit/${user.id}`}>
                    ✏️ Edit
                  </Link>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm shadow" onClick={() => { dispatch(deleteUser(user.id)) }}>
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
      </div>



    </div>
  );
};

export default Read;
