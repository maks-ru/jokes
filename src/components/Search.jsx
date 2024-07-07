import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import useSearchJokes from "../hooks/useSearchJokes";
// import { setTotal } from "../store";
// import JokesList from "./JokesList";
import {setTotal} from "@/store/store";
import JokesList from "@/components/JokeList";
import {useSelector} from "react-redux";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const {data, error, isFetching} = useSearchJokes(query);
  const [totalCount, setTotalCount] = useState(0)


  useEffect(() => {
    if (data) {
      dispatch(setTotal(data.total));
      setTotalCount(data.total)
    }
  }, [data, dispatch]);


  return (
    <div className="">
      <div className=" flex flex-col w-[500px] m-auto">
        <input
          className="p-4 shadow-xl"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for jokes"
        />
        {
          data ? <span className="mt-6 text-sm">Total count: {totalCount}</span> : ''
        }
      </div>

      {isFetching && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <JokesList jokes={data.result}/>}


    </div>
  );
};

export default Search;
