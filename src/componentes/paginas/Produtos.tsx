import { useEffect, useState } from "react";
import "./Produtos.css";
import ListaProdutos from "../ListaProdutos";

// Array de objetos de Posts - Ficheiro
//import posts from "../../data/Posts.js";

const Produtos = () => {
  // Array de Objetos
  const [produtos, setProdutos] = useState<
    { id: number; name: string; image_link: string }[]
  >([]);

  // Array de strings
  //const [names, setNames] = useState<string[]>([]);
  //const [names, setNames] = useState(['']);

  // Array de objetos de Produtos de Maquilhagem - Api(url)
  async function getProdutos() {
    const response = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    setProdutos(data);
    //console.log(data);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <div className="Produtos">
        {/*<ListaProdutos produtos={produtos} />*/}
        <ListaProdutos produtos={produtos} />
      </div>
    </>
  );
};

export default Produtos;
