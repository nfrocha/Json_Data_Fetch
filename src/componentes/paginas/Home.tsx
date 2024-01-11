import "./Home.css";

const Home = () => {
  return (
    <>
      {
        <div className="Home">
          <h1>Projeto: Json_Data_Fetch</h1>
          <h2>Obtenção de dados json a partir de diferentes fontes</h2>
          <p>
            Este projeto serve para demonstrar a importação de ficheiros JSON em
            React Js. Para tal foram usadas 3 formas de importação distintas:
          </p>
          <ul>
            <li>
              - Json-loader, importando diretamente de um ficheiro Javascript
            </li>
            <li>- Fetch dos dados através de async/await</li>
            <li>- Fetch dos dados usando a biblioteca React Query</li>
          </ul>
        </div>
      }
    </>
  );
};

export default Home;
