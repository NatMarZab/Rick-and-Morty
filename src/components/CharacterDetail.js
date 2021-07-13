import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/layout/_characterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <article className="characterArticle">
      <Link to="/" className="link">
        &gt;Volver
      </Link>
      <div className="stylesDetail">
        <img
          src={props.specificCharacter.image}
          alt={`Foto de ${props.specificCharacter.name}`}
          className="characterImage"
          title={`Foto de ${props.specificCharacter.name}`}
        />
        <div className="textInfo">
          <h4 className="characterTitle">{props.specificCharacter.name}</h4>
          <ul className="features">
            <li>Specie: {props.specificCharacter.species}</li>
            <li>Origin: {props.specificCharacter.origin.name}</li>
            <li>Status: {props.specificCharacter.status}</li>
            <li>Episodes: {props.specificCharacter.episode.length}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};
export default CharacterDetail;
