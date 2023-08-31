import BaseCard from "./BaseCard";

const ListCards = () => {
  return (
    <div className="container">
      {new Array(10).fill(0).map((_, idx) => (
        <BaseCard key={idx} />
      ))}
    </div>
  );
};

export default ListCards;
