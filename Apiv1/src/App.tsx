import useGetPosts from "./api";
import { FetchState } from "./Types";

const App = () => {
  const [posts, fetchState, getPosts] = useGetPosts();

  return (
    <div>
      {fetchState === FetchState.DEFAULT && (
        <div>
          <button onClick={getPosts}>Click</button>
        </div>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <div>
          <p>Something went wrong...</p>
          <button onClick={getPosts}>Click</button>
        </div>
      )}
      {fetchState === FetchState.SUCCESS && (
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>
                  {post.id} - {post.name}
                </h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
