import React, { useState } from 'react';

function PaymentPage() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: '',
        paymentMethod: 'credit',
        currentLocation: '',
        currentAddress: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <main className="h-screen-full mt-24 mb-6 flex justify-center items-center">
            <div className="shadow-xl rounded-lg p-10 w-full max-w-2xl bg-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Payment Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Current Location</label>
                                <input
                                    type="text"
                                    name="currentLocation"
                                    value={formData.currentLocation}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Current Address</label>
                                <input
                                    type="text"
                                    name="currentAddress"
                                    value={formData.currentAddress}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                    placeholder="1234 5678 9012 3456"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1 flex items-center">
                                    <label className="block text-lg mb-1 w-1/3">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="cardExpiry"
                                        value={formData.cardExpiry}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="flex-1 flex items-center">
                                    <label className="block text-lg mb-1 w-1/3">CVC</label>
                                    <input
                                        type="text"
                                        name="cardCVC"
                                        value={formData.cardCVC}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                        required
                                        placeholder="123"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-lg mb-1 w-1/3">Payment Method</label>
                                <select
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                >
                                    <option value="credit">Credit Card</option>
                                    <option value="debit">Debit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="applepay">Apple Pay</option>
                                    <option value="googlepay">Google Pay</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-500 transition duration-200"
                    >
                       payment proceed
                    </button>
                </form>
            </div>
        </main>
    );
}

export default PaymentPage;
