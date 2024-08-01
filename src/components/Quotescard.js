import React from 'react';

const Quotescard = ({ quote }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="p-4 test-center">
                <div className="text-4xl text-gray-400"></div>
                <p className="text-gray-800 text-xl font-medium mt-4 mb-6">"{quote}"</p>
            </div>
        </div>
    );
};

export default Quotescard;
