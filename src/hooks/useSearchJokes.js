import {useQuery} from "react-query";
import {searchJokes} from "@/utils/api";

const useSearchJokes = (query) => {
  return useQuery(["searchJokes", query], () => searchJokes(query), {
    enabled: query.length >= 4,
  });
};

export default useSearchJokes;