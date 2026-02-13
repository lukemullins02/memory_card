import { useState } from "react";
import "../styles/card.css";

export default function Card({ poke, setScore }) {
  const [arr, setArr] = useState([]);

  const pokeImgs = poke.map((item) => (
    <div
      onClick={() => {
        if (arr.find((ele) => ele.id === item.id)) {
          console.log("hello");
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
