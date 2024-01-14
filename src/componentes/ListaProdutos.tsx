import "./ListaProdutos.css";
import ProdutoCard from "./ProdutoCard";

interface ProdutosProps {
  produtos: IPost[];
}
interface IPost {
  id: number;
  name: string;
  image_link: string;
}

/*
const arrAlunos = [
  {
    ID: 1,
    Nome: "Nuno Rocha",
    Idade: 15,
  },
  {
    ID: 2,
    Nome: "Maria Silva",
    Idade: 16,
  },
  {
    ID: 3,
    Nome: "António Rodrigues",
    Idad: 15,
  },
];

const DadosAlunos = arrAlunos.map((aluno) => (
  <li key={aluno.ID}>{aluno.Nome}</li>
));
*/

const ListaProdutos = (props: ProdutosProps) => {
  const { produtos } = props;

  return (
    /*<div>*/
    <>
      <h3>Nº Registos: {produtos.length}</h3>
      <ul className="ulProdutos">
        {produtos.map((produto) => (
          <ProdutoCard
            id={produto.id}
            name={produto.name}
            image_link={produto.image_link}
          />
          /*<li key={produto.id}>{produto.name}</li>*/
        ))}
      </ul>
      {/*<ul>{DadosAlunos}</ul>;*/}
    </>
    /*</div>*/
  );
};

export default ListaProdutos;
