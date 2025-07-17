import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailslice';
import CustomModal from './customModel';

const Read = () => {
  const dispatch = useDispatch();
  
  const {users,loading}=useSelector((state)=>state.app)

  const [id,setid]=useState("")
  const [showpop,setshowpop]=useState(false)

  useEffect(() => {
    dispatch(showUser());
  }, []);


  if (loading){
    return <h2>Loading</h2>
  }



  return (
    
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      {/* ✅ Modal Component */}
      {showpop && <CustomModal id={id} showpop={showpop} setshowpop={setshowpop}/>}

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Profiles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users && users.map((user) => (
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
                onClick={()=>[setid(user.id),setshowpop(true)]}
                
              >
                👁️ View
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md text-sm shadow">
                ✏️ Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm shadow">
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
