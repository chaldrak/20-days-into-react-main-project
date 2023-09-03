import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const BaseCard = ({ title, chapitres, star, cover, description }) => {

  //maintenant je créé mon tableau qui va contenir un nombre de zéro égal à la valeur star.
  const starsArray = new Array(star).fill(0);

  return (
    <div className="card-container">
      <div className="card-header">
        <img src={cover} alt="Image Card" />
      </div>

      <div className="card-body">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <p className="chapitre">{chapitres}</p>

        <div className="elt">
          <button className="btn">Démarrer</button>
          <div className="star-display">
            {
              starsArray.map( (_, idx) => (
              <FontAwesomeIcon key = {idx} icon={faStar} className="star"/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
