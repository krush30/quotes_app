import React, { useState } from 'react';

const Quotescard = ({ quote, savedQuote, savefun }) => {
    const handleList = () => {

        savefun(quote);
    }
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="p-4 test-center">
                <div className="text-4xl text-gray-400"></div>
                <button
                    className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded ${savedQuote ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
                    onClick={handleList}
                >
                    {savedQuote ? 'Saved' : 'Save'}
                </button>
                <p className="text-gray-800 text-xl font-medium mt-4 mb-6">"{quote}"</p>
            </div>
        </div>
    );
};

export default Quotescard;
