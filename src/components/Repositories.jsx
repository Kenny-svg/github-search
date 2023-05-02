import React, {Fragment} from "react";
import axios from "axios";
import { useQuery } from "react-query";
const Repositories = () => {
    const { isLoading, isError, data, error, refetch } = useQuery(["repos"], () =>
    axios
      .get("https://api.github.com/repositories")
      .then((res) => res.data)
  );
  if (isLoading) return "Loading...";
 
  if (error) return "An error has occurred: " + error.message;
 
  console.log(data)
    return ( 
        <>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 border-t w-11/12 mx-auto">
  {data.map((repo) => {
    return (
        <>
        <a target="_blank" href={repo.html_url}>
        <div className=" p-4 border rounded-lg text-center bg-emerald-400" key={repo.id}>
        <img className="rounded-full w-10 mx-auto" src={repo.owner.avatar_url} />
          <p>{repo.name}</p>
       
      </div> 
        </a>
            
        </>

    );
  })}
</div>

        <button type="button" onClick={refetch}>
          Fetch again
        </button>
        </>
     );
}
 
export default Repositories;