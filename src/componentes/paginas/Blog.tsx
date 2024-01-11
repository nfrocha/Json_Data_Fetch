//import { useEffect, useState } from "react";
import "./Blog.css";
import ListaPosts from "../ListaPosts";

// Array de objetos de Posts - Ficheiro
import posts from "../../data/Posts.js";

const Blog = () => {
  // Array de Objetos
  /*const [posts, setPosts] = useState<
    { id: number; name: string; image_link: string }[]
  >([]);*/

  // Array de strings
  //const [names, setNames] = useState<string[]>([]);
  //const [names, setNames] = useState(['']);

  // Array de objetos de Produtos de Maquilhagem - Api(url)
  /*async function getPosts() {
    const response = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    setPosts(data);
    //console.log(data);
  }

  useEffect(() => {
    getPosts();
  }, []);*/

  return (
    <>
      <div className="Blog">
        <ListaPosts posts={posts} />
      </div>
    </>
  );
};

export default Blog;
