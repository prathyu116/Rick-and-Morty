import React from "react";
import { Modal } from "react-bootstrap";
import "./DetailsUserCard.css"
export function DetailsUserCard(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton />
      <Modal.Body className="modal__body">
        <div className="top">
          <div className="top__right">
            <img src={props.image} alt="" />
          </div>
          <div className="top__left">
            <h3>{props.name}</h3>
            <div className="card__right">
              <div className={props.status == "Alive" ? "card__right__Green" : "card__right__Gray"}></div>
              <div className="card__right__species">
                <h3 style={{ color: "gray", fontSize: "13px" }}>
                  {props.status}-{props.species}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="down">
          <div className="colom_1">
            <div className="colom_1_row1">
              <p>Gender</p>
              <h6>{props.gender}</h6>
            </div>
            <div className="colom_1_row2">
              <p>Species</p>
              <h6>{props.species}</h6>
            </div>
          </div>
          <div className="colom_2">
            <div className="colom_2_row1">
              <p>Location</p>
              <h6>{props.location}</h6>
            </div>
            <div className="colom_2_row2">
              <p>Origin</p>
              <h6>{props.origin}</h6>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
