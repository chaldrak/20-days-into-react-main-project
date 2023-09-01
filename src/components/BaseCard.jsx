const BaseCard = ({ title, cover, description }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={cover} alt="Image Card" />
      </div>
      <div className="card-body">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BaseCard;
