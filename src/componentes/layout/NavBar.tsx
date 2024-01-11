import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <aside className="NavBar">
      <nav>
        <ul>
          <li>
            <Link to="/">Projeto</Link>
          </li>
          <li>
            <Link to="/blog">Json-loader</Link>
          </li>
          <li>
            <Link to="/produtos">Async/await</Link>
          </li>
          <li>
            <Link to="/alunos">React Query</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
