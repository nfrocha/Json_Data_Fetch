import { useEffect } from "react";
import { useQuery } from "react-query";
import "../ListaProdutos.css";
import ProdutoCard from "../ProdutoCard";

const ListaAlunos = () => {
  const url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(url.toString()).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: "; /*+ error.message;*/

  /*
  function fetchData() {
    // Fetch Data usando React Query 
  }

  function handleClick() {
    // Handle Click do Botão 
  }

  useEffect(() => {
    fetchData();
  }, []);
    */

  return (
    <div>
      <h3>Nº Registos: {data.length}</h3>
      <ul className="ulProdutos">
        {data.map((item: any) => (
          <ProdutoCard
            id={item.id}
            name={item.name}
            image_link={item.image_link}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaAlunos;
