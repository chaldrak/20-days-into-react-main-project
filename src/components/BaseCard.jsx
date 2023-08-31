import ImageCard from "../assets/default-course.png";

const BaseCard = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={ImageCard} alt="Image Card" />
      </div>
      <div className="card-body">
        <h1>React JS</h1>
        <p>20 Days into React js</p>
      </div>
    </div>
  );
};

export default BaseCard;
