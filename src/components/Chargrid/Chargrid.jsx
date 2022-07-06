import React from 'react'
import CharacterItem from '../CharacterItem/CharacterItem';
import "./CharGrid.css"
const Chargrid = ({item}) => {
  return (
    <section className="cards">
      {item.map((item, index) => (
        <CharacterItem key={index} item={item} />
      ))}
    </section>
  );
}

export default Chargrid