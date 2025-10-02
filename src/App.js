import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./App.css";
import PokemonCard from "./PokemonCard";
import TrainerCard from "./TrainerCard";

// 🔑 이미지 import
import RaihanImg from "./img/Raihan.jpg";
import KabuImg from "./img/Kabu.png";
import IngoImg from "./img/Ingo.png";
import EmmetImg from "./img/Emmet.png";
import LarryImg from "./img/Larry.png";
import GuzmaImg from "./img/Guzma.jpg";
import NanuImg from "./img/Nanu.png";
import AdamanImg from "./img/Adaman.jpg";

// 🔑 프로필 이미지 import (리시아 프로필)
import ProfileImg from "./img/profile.png"; // 업로드한 이미지 경로에 맞게 저장

function App() {
  // 현재 단계 (0 = 소개, 1 = 포켓몬, 2 = 트레이너)
  const [step, setStep] = useState(0);

  // 포켓몬 리스트
  const [pokemonList] = useState([
    {
      id: 1, krName: "갑주무사", enName: "Golisopod", type: "벌레/물", No: "768",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/768.gif"
    },
    {
      id: 7, krName: "다크라이", enName: "Darkrai", type: "악", No: "491",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/491.gif"
    },
    {
      id: 2, krName: "제라오라", enName: "Zeraora", type: "전기", No: "807",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/807.gif"
    },
    {
      id: 8, krName: "루카리오", enName: "Lucario", type: "격투/강철", No: "448",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/448.gif"
    },
    {
      id: 4, krName: "기라티나", enName: "Giratina", type: "고스트/드래곤", No: "487",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/487.gif"
    },
    {
      id: 5, krName: "펄기아", enName: "Palkia", type: "물/드래곤", No: "484",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/484.gif"
    },
    {
      id: 6, krName: "디아루가", enName: "Dialga", type: "강철/드래곤", No: "483",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/483.gif"
    },
    {
      id: 3, krName: "두랄루돈", enName: "Duraludon", type: "강철/드래곤", No: "884",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/884.gif"
    }
  ]);

  // 트레이너 리스트
  const [trainerList] = useState([
    {
      id: "t6", krName: "구즈마", enName: "Guzma", JpName: "グズマ", profileImg: GuzmaImg
    },
    {
      id: "t7", krName: "나누", enName: "Nanu", JpName: "クチナシ", profileImg: NanuImg
    },
    {
      id: "t4", krName: "하행", enName: "Emmet", JpName: "クダリ", profileImg: EmmetImg
    },
    {
      id: "t3", krName: "상행", enName: "Ingo", JpName: "ノボリ", profileImg: IngoImg
    },
    {
      id: "t1", krName: "금랑", enName: "Raihan", JpName: "キバナ", profileImg: RaihanImg
    },
    {
      id: "t2", krName: "순무", enName: "Kabu", JpName: "カブ", profileImg: KabuImg
    },
    {
      id: "t8", krName: "찬석", enName: "Adaman", JpName: "セキ", profileImg: AdamanImg
    },
    {
      id: "t5", krName: "청목", enName: "Larry", JpName: "アオキ", profileImg: LarryImg
    }
  ]);

  // 단계별 화면
  const renderStep = () => {
    if (step === 0) {
      return (
        <div className="intro-card">
          <img src={ProfileImg} alt="리시아 프로필" className="profile-img" />
          <h3>안녕하세요!</h3>

          <div className="intro-text">
            <p>구즈마와 드림 중인 <strong>리시아</strong> 라고 합니다. ٩(ˊᗜˋ*)و</p>
            <p>포켓몬 덕질 중인 <span className="highlight">구즈마(금랑, 상행하행)</span>이 메인인 오시이며,<br />
            본가 · 포켓몬 마스터즈 · 유나이트 위주로 플레이를 하고 있습니다.</p>
            <p>
              캐혐 및 포켓몬혐(+성우혐)과 같은 것들이 아니라면 지뢰 요소가 없다죠!<br />
              커플링은 <span className="highlight">구즈마 제외 전부</span> 좋아해요!
            </p>
          </div>
        </div>
      );
    } else if (step === 1) {
      return (
        <section className="section">
          <h2>최애 포켓몬 | Favorite Pokemon</h2>
          <div className="card-container">
            {pokemonList.map((p) => (
              <PokemonCard key={p.id} pokemon={p} />
            ))}
          </div>
        </section>
      );
    } else if (step === 2) {
      return (
        <section className="section">
          <h2>최애 트레이너 | Favorite Trainer</h2>
          <div className="trainer-container">
            {trainerList.map((t) => (
              <TrainerCard key={t.id} trainer={t} />
            ))}
          </div>
        </section>
      );
    }
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>📖 Licia's Profile</h1>
        <p className="subtitle">My main language is KOR, but ENG, JP are available in Sub language!</p>
      </header>

      {renderStep()}

      <div className="nav-buttons">
        {step > 0 && (
          <button className="nav-btn" onClick={() => setStep(step - 1)}>
            <FaArrowLeft size={20} />
          </button>
        )}
        {step < 2 && (
          <button className="nav-btn" onClick={() => setStep(step + 1)}>
            <FaArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;