import { useEffect, useState } from "react";
import LoadingWheel from "./LoadingWheel";
import Forbidden from "./Forbidden";
import LoadingError from "./LoadingError";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [forbidden, setForbidden] = useState(false);
  const [posts, setPosts] = useState();

  useEffect(() => {
    const hostname = import.meta.env.VITE_HOSTNAME || "http://localhost:3000";
    const fetchPosts = async () => {
      await fetch(hostname + "/api/posts", { credentials: "include" })
        .then((res) => {
          if (res.status === 403) {
            setLoading(false);
            setForbidden(true);
            throw new Error("Forbidden");
          }
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setPosts(res);
        })
        .catch((error) => {
          if (error.message === "Forbidden") {
            return;
          }
          // console.log(error);
          return setError(error);
        });
    };
    fetchPosts();
  }, []);

  if (loading) return <LoadingWheel />;
  if (forbidden) return <Forbidden />;
  if (error) return <LoadingError />;

  return (
    <div className="allPostsContainer">
      {posts.map((post) => {
        <p>{post.title}</p>;
      })}
    </div>
  );
}
