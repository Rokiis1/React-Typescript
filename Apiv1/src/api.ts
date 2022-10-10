import axios from "axios";
import { useState } from "react";
import { FetchState, Post } from "./Types";

export const useGetPosts = () => {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState<Post[]>([]);
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const responseData = response.data as Post[];

      setPosts(responseData);

      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [posts, fetchState, getPosts] as const;
};

export default useGetPosts;
