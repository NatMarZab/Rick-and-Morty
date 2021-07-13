import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheet/layout/_characterList.scss";

const CharacterList = (props) => {
  const charactersInfo = props.dataList.map((character) => {
    return (
      <li key={character.id} className="characterList-item">
        <CharacterCard character={character} />
      </li>
    );
  });
  return props.dataList.length === 0 ? (
    <p>There is not character that matches the word {props.filteredName}</p>
  ) : (
    <ul className="characterList">{charactersInfo}</ul>
  );
};
export default CharacterList;
