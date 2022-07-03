import React, { FC, useEffect, useState } from 'react';

const DelayedInput = ({ onChange, type = "text", placeholder = "", value = "", className = "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" }) => {

    const [query, setQuery] = useState("");


    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (onChange) {
                onChange(query);
            }
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [query]);

    useEffect(() => {
        setQuery(value)
    }, [value]);

    return (
        <>
            {type === "tetxarea" ?

                <textarea className={className} value={query} onChange={event => setQuery(event.target.value)} placeholder={placeholder}>
                    {query}
                </textarea> :


                <input
                    className={className}
                    type={type}
                    value={query}
                    placeholder={placeholder}
                    onChange={event => setQuery(event.target.value)}
                />
            }
        </>
    );
};

export default DelayedInput;