import axios from 'axios';
import React, { useState } from 'react';

function UserDetails(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        currentAddress: '',
        mobileNumber: '',
        altPhoneNumber: '',
    });
    const [savedMessage, setSavedMessage] = useState('');


    const handlesubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const firstname = form['firstName'].value
        const lastname = form["lastName"].value
        const email = form["email"].value
        const location = form["location"].value
        const currentaddress = form["currentAddress"].value
        const mobilenumber = form["mobileNumber"].value
        const alternativephonenumber = form["altPhoneNumber"].value

        axios.post(`${import.meta.env.VITE_API_URL}/userdetails`, { firstname, lastname, email, location, currentaddress, mobilenumber, alternativephonenumber })
            .then(data => {
                const datas = (data)

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    location: '',
                    currentAddress: '',
                    mobileNumber: '',
                    altPhoneNumber: '',
                });
                setSavedMessage('Changes saved successfully.');

                setTimeout(() => {
                    setSavedMessage('');
                }, 3000);

            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <main className="flex h-screen-full mt-28 mb-20 justify-center items-center ">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="flex justify-center mb-6">

                </div>
                <form className="space-y-6 " onSubmit={handlesubmit}>
                    <div className='flex rounded-2xl p-4 justify-center '>
                        <h1 className='bg-yellow-200 p-8 rounded-full	'>?</h1>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                value={formData.firstName}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                value={formData.lastName}
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                            value={formData.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                            value={formData.location}
                            onChange={handleChange}


                        />
                    </div>
                    <div>
                        <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700 mb-1">Current Address</label>
                        <textarea
                            id="currentAddress"
                            name="currentAddress"
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 resize-none"
                            value={formData.currentAddress}
                            onChange={handleChange}

                        ></textarea>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                name="mobileNumber"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                value={formData.mobileNumber}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="altPhoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Alternative Phone Number</label>
                            <input
                                type="tel"
                                id="altPhoneNumber"
                                name="altPhoneNumber"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                value={formData.altPhoneNumber}
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Update Changes
                    </button>
                    {savedMessage && (
                        <div className="mt-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">updated:</strong>
                            <span className="block sm:inline"> {savedMessage}</span>
                        </div>
                    )}
                </form>
            </div>
        </main>
    );
}

export default UserDetails;