import { useEffect, useState } from "react";
import "./Produtos.css";
import ListaProdutos from "../ListaProdutos";

const Produtos = () => {
  type produto = {
    id: number;
    name: string;
    image_link: string;
  };

  // Array de strings - ok
  // const [names, setNames] = useState<string[]>([]);
  // const [names, setNames] = useState(['']);

  // Array de Objetos destruturado - ok
  //const [produtos, setProdutos] = useState<
  //{ id: number; name: string; image_link: string }[]>([]);

  // Array de Objetos com type - ok
  const [produtos, setProdutos] = useState<produto[]>([]);

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
        <ListaProdutos produtos={produtos} />
      </div>
    </>
  );
};

export default Produtos;
