import React from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { DetailsUserCard } from "../DetailsUserCard/DetailsUserCard";
import "./CharacterItem.css";
const CharacterItem = ({ item }) => {
      const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="card" onClick={() => setModalShow(true)}>
        <div className="card__left">
          <div className="card__left__img">
            <img src={item.image} alt="" />
          </div>
          <div className="card__left__text">
            <span>{item.name}</span>
          </div>
        </div>
        <div className="card__right">
          <div className={item.status == "Alive" ? "card__right__Green" : "card__right__Gray"}></div>
          <div className="card__right__species">
            <span>
              {item.status}-{item.species}
            </span>
          </div>
        </div>
      </div>
      <DetailsUserCard
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={item.name}
        status={item.status}
        species={item.species}
        image={item.image}
        gender={item.gender}
        location = {item.location.name}
        origin = {item.origin.name}
      />
    </>
  );
};

export default CharacterItem;
