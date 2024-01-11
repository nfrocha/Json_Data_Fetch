import "./PostCard.css";
interface AlunoProps {
  id: number;
  nome: string;
  data: string;
  descricao: string;
  img: string;
}

const PostCard = (props: AlunoProps) => {
  const { id, nome, data, img } = props;
  return (
    <div className="PostCard" key={id}>
      <div>
        <p>{nome}</p>
      </div>

      <div>
        <img src={img !== "n/a" ? img : "https://via.placeholder.com/250"} />
      </div>

      <div>
        <span>{nome}</span>
        <h3>{data}</h3>
      </div>
    </div>
  );
};

export default PostCard;
