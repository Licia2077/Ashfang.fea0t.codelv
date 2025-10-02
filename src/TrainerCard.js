import React, { useState } from "react";
import "./App.css";

function TrainerCard({ trainer }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="trainer-card" onClick={() => setShowDetail(!showDetail)}>
      {/* 기본 표시: 프로필 아이콘 + 이름 */}
      <div className="trainer-top">
        <img
          className="trainer-profile"
          src={trainer.profileImg}
          alt={trainer.enName}
        />
        <div className="trainer-names">
          <h2 className="kr">{trainer.krName}</h2>
          <p className="jp">{trainer.jpName}</p>
          <p className="en">{trainer.enName}</p>
        </div>
      </div>

      {/* 클릭 시 상세 정보 */}
      {showDetail && (
        <div className="trainer-detail">
          <div className="trainer-pokemon">
            <img
              src={trainer.mainPokemonImg}
              alt={trainer.mainPokemonName}
              className="trainer-poke"
            />
            <p>{trainer.mainPokemonName}</p>
          </div>
          <p>역할: {trainer.role}</p>
          <p>대표 포켓몬: {trainer.mainPokemonName}</p>
        </div>
      )}
    </div>
  );
}

export default TrainerCard;
