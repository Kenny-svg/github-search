import { useState } from "react";
import axios from "axios";
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = async (e) => {
        e.preventDefault()
        const url = `https://api.github.com/search/repositories?q=${searchTerm}`;
        const response = await axios.get(url);
        setResults(response.data.items);
      };
    return ( 
        
        <>
        
<form className="flex items-center">   
    <label htmlFor="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-emerald-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input id="voice-search" className="items-center bg-black/70 border border-gray-300 text-white text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-24 shadow-lg"   
           type="text"
           placeholder="Search for GitHub repositories"
           value={searchTerm}
           onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg aria-hidden="true" className="w-4 h-4 text-emerald-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    <button onClick={handleSearch} type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-emerald-400 rounded-lg border border-emerald-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-emerald-400 dark:focus:ring-blue-800">
        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
</form>
<ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 border-t w-11/12 mx-auto">

        {results.map((repo) => (
          <li className=" p-4 border rounded-lg text-center bg-emerald-400" key={repo.id}>
                    <a target="_blank" href={repo.html_url}>
        <div className=" p-4 border rounded-lg text-center bg-emerald-400" key={repo.id}>
        <img className="rounded-full w-10 mx-auto" src={repo.owner.avatar_url} />
          <p>{repo.name}</p>
       
      </div> 
        </a>
          </li>
        ))}
      </ul>
        </>
     );
}
 
export default Search;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Search() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     const url = `https://api.github.com/search/repositories?q=${searchTerm}`;
//     const response = await axios.get(url);
//     setResults(response.data.items);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for GitHub repositories"
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {results.map((repo) => (
//           <li key={repo.id}>{repo.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search;
