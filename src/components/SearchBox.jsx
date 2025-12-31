import React from "react";

function SearchBox({label, placeholder, value, handleSearchChange}) {

    return (
        <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
            <label className="text-lg font-semibold text-primary dark:text-cyan-100">{label}</label>
            <input
                type="text"
                className="px-4 py-2 text-base border rounded-md transition
                border-primary focus:ring focus:ring-dark focus:outline-none
                text-gray-800 dark:text-cyan-100"
                placeholder={placeholder}
                value={value}
                onChange={(event) => handleSearchChange(event.target.value)}
            />
        </div>
    );
}

export default SearchBox;