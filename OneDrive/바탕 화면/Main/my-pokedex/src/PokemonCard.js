import React, { useState } from "react";

function PokemonCard({ pokemon }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="card" onClick={() => setShowDetail(!showDetail)}>
      <img className="poke-img" src={pokemon.img} alt={pokemon.enName} />
      <div className="names">
        <h2 className="kr">{pokemon.krName}</h2>
        <div className="subnames">
          <span className="jp">{pokemon.jpName}</span>
          <span className="en">{pokemon.enName}</span>
        </div>
      </div>

      {showDetail && (
        <div className="detail">
          {pokemon.No && <p>도감번호: {pokemon.No}</p>}
          <p>타입: {pokemon.type}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
