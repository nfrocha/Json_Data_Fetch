import "./ProdutoCard.css";

interface ProdutoProps {
  id: number;
  name: string;
  image_link: string;
}

const ProdutoCard = (props: ProdutoProps) => {
  const { id, name, image_link } = props;

  return (
    <>
      <div className="ProdutoCard" key={id}>
        <div>
          <img
            className="Foto"
            src={
              image_link !== "n/a"
                ? image_link
                : "https://via.placeholder.com/250"
            }
          />
        </div>

        <div className="Dados">
          <span>{name}</span>
        </div>
      </div>
    </>
  );
};

export default ProdutoCard;
