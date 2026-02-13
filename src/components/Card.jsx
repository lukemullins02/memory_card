import { useState } from "react";
import "../styles/card.css";
import { shuffleArr } from "./helper";

export default function Card({
  poke,
  setScore,
  score,
  setHighScore,
  highScore,
}) {
  const [arr, setArr] = useState([]);

  const pokeImgs = poke.map((item) => (
    <div
      onClick={() => {
        shuffleArr(poke);
        if (arr.find((ele) => ele.id === item.id)) {
          if (highScore < score) {
            setHighScore(score);
          }
          setScore(0);
          setArr([]);
        } else {
          const ele = poke.find((ele) => ele.id === item.id);
          setArr([...arr, ele]);
          setScore((score) => score + 1);
        }
      }}
      className="card"
      key={item.id}
    >
      <img src={item.pokeIMG} />
      <p>{item.name}</p>
    </div>
  ));
  return <div className="container">{pokeImgs}</div>;
}
