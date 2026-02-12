import { useState, useEffect } from "react";
import Card from "./Card";

export default function Display() {
  const [poke, setPoke] = useState([]);

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
      }
      setPoke(arr);
    };
    fetchData();
  }, []);

  console.log(poke);

  return <Card poke={poke} />;
}
