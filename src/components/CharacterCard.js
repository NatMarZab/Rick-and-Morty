import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/layout/_characterCard.scss";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="characterArticleCard">
        <img
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          className="characterImageCard"
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="characterTitle">{props.character.name}</h4>
        <p className="detailCard">{props.character.gender}</p>
        <p className="detailCard">{props.character.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
