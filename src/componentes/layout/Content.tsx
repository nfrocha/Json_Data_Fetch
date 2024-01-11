import "./Content.css";

import { Routes, Route } from "react-router-dom";
import Home from "../paginas/Home";
import Blog from "../paginas/Blog";
import Produtos from "../paginas/Produtos";
import NotFound from "../paginas/NotFound";

const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Content;
