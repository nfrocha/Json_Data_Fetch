import "./ListaPosts.css";
import PostCard from "./PostCard";

interface PostsProps {
  posts: IPost[];
}
interface IPost {
  id: number;
  nome: string;
  data: string;
  descricao: string;
  img: string;
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

const ListaPosts = (props: PostsProps) => {
  const { posts } = props;

  return (
    /*<div>*/
    <>
      <ul className="ulPosts">
        {posts.map((post) => (
          <PostCard
            id={post.id}
            nome={post.nome}
            data={post.data}
            descricao={post.descricao}
            img={post.img}
          />
          /*<li key={aluno.id}>{aluno.nome}</li>*/
        ))}
      </ul>
      {/*<ul>{DadosAlunos}</ul>;*/}
    </>
    /*</div>*/
  );
};

export default ListaPosts;
