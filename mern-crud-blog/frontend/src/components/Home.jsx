import React from 'react';

const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Welcome to MERN CRUD Application
            </h1>
            <p className="text-xl text-gray-600 mb-5">
                A complete full-stack application built with MongoDB, Express, React, and Node.js
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg inline-block">
                <p className="text-lg text-gray-700">
                    Use the navigation menu above to:
                </p>
                <ul className="mt-4 text-left inline-block">
                    <li className="mb-2">• Manage Users 👥</li>
                    <li className="mb-2">• Manage Products 🛒</li>
                    <li className="mb-2">• Perform CRUD operations</li>
                    <li>• View data in MongoDB</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;