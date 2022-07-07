import React from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import Spinner from "../Spinner/Spinner";
import "./CharGrid.css";
const Chargrid = ({ item, isLoading }) => {
  return isLoading  ? (
    <Spinner />
  ) : (
    <section className="cards">
      {item.map((item, index) => (
        <CharacterItem key={index} item={item} />
      ))}
    </section>
  );
};

export default Chargrid;
