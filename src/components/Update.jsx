import React, { useEffect ,useState} from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/userDetailslice';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const dispatch=useDispatch()

    const { id } = useParams()
    const [updatedData,setupdatedData]=useState()
    const navigate=useNavigate()

    const allusers = useSelector((state) => state.app.users);
    useEffect(() => {
        const singleuser = allusers.filter((user) => user.id === id);
        setupdatedData(singleuser[0])
    }, [])
    
    const newData=(e)=>{
        setupdatedData({...updatedData,[e.target.name]:e.target.value})
        console.log(updatedData);
        
    }
    const handlechange=(e)=>{

        e.preventDefault();
        dispatch(updateUser(updatedData))
        navigate("/read")
    }




    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Update Your Profile
                </h2>

                <form onSubmit={handlechange}

                >
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        // onChange={handleChange}
                        value={updatedData && updatedData.name}
                        onChange={newData}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={updatedData && updatedData.email}
                            onChange={newData}
                            //   onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter your age"
                            value={updatedData && updatedData.age}
                            onChange={newData}
                            //   onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <span className="block text-sm font-semibold text-gray-600 mb-2">
                            Gender
                        </span>
                        <div className="flex space-x-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={updatedData && updatedData.gender=='male'}
                                    onChange={newData}
                                    //   onChange={handleChange}
                                    className="mr-2 accent-blue-600"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={updatedData && updatedData.gender=='female'}
                                    onChange={newData}
                                    //   onChange={handleChange}
                                    className="mr-2 accent-pink-500"
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Update