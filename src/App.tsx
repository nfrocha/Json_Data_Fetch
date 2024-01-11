import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./componentes/layout/NavBar";
import Content from "./componentes/layout/Content";
import Footer from "./componentes/layout/Footer";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Content />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
