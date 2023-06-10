import Image from "next/image";
import { useState,useEffect } from "react";

const SearchInput = () => {
    const [query, setQuery]=useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div className="bg-indigo-600 flex p-3 justify-between">
            <div className="flex space-x-2">
                <input type={'text'} placeholder='Search Weather by Location'
                    onChange={handleChange}
                    value={query}
                    className=" border-2 m-auto"
                    required />
                <button className="border pl-2 pr-2 text-white rounded-md" >Search</button>
            </div>
            <div>
                <Image src={'/logo.jpeg'} width={44} height={44} alt='logo' className="rounded-md" />
            </div>
        </div>
    );
}

export default SearchInput;