import "./ProdutoCard.css";

interface ProdutoProps {
  id: number;
  name: string;
  image_link: string;
}

const ProdutoCard = (props: ProdutoProps) => {
  const { id, name, image_link } = props;

  return (
    <div className="ProdutoCard" key={id}>
      <div>
        <img
          src={
            image_link !== "n/a"
              ? image_link
              : "https://via.placeholder.com/250"
          }
        />
      </div>

      <div>
        <span>{name}</span>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ProdutoCard;
