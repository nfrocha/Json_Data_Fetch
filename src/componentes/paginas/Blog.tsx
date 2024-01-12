//import { useEffect, useState } from "react";
import "./Blog.css";
import ListaPosts from "../ListaPosts";

// Array de objetos de Posts - Ficheiro
import posts from "../../data/Posts.js";

const Blog = () => {
  return (
    <>
      <div className="Blog">
        <ListaPosts posts={posts} />
      </div>
    </>
  );
};

export default Blog;
