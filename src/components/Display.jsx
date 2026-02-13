import { useState, useEffect } from "react";
import Card from "./Card";
import Score from "./score";
import { shuffleArr } from "./helper";

export default function Display() {
  const [poke, setPoke] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const arr = [];

      for (let i = 1; i < 13; i++) {
        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${i}/`,
        );

        const final = await result.json();

        arr.push({
          id: i,
          pokeIMG: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
          name: final.name,
        });

        shuffleArr(arr);
      }
      setPoke(arr);
    };
    fetchData();
  }, []);

  console.log(poke);

  return (
    <>
      <Score score={score} highScore={highScore} />
      <Card
        poke={poke}
        setScore={setScore}
        score={score}
        setHighScore={setHighScore}
        highScore={highScore}
      />
    </>
  );
}
