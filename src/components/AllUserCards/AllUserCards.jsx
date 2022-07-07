import React from "react";
import BasicUserCard from "../BasicUserCard/BasicUserCard";
import Spinner from "../Spinner/Spinner";
import "./AllUserCards.css";
const AllUserCards = ({ item, isLoading }) => {
    console.log("AllUserCards");

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {item.map((item, index) => (
        <BasicUserCard key={index} item={item} />
      ))}
    </section>
  );
};

export default React.memo(AllUserCards);
