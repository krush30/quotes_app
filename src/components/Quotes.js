import React, { useEffect, useState } from 'react';
import Quotescard from './Quotescard';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [saveQuote, setSaveQuote] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/5'); // Fetch 5 quotes
            const json = await response.json();
            setQuotes(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleQuotes = (quote) => {
        setSaveQuote((ifSavedQuotes) => {
            if (ifSavedQuotes.includes(quote)) {
                return ifSavedQuotes.filter(q => q !== quote)
            } else {
                return [...ifSavedQuotes, quote]
            }
        })
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {quotes.map((quote, index) => (
                    <Quotescard key={index} quote={quote} savedQuote={saveQuote.includes(quote)} savefun={handleQuotes} />
                ))}
            </div>
        </div>
    );
};

export default Quotes;
