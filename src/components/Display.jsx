import { useState, useEffect } from "react";

export default function Display() {
  const [poke, setPoke] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const arr = [];

      for (let i = 0; i < 12; i++) {
        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${i + 1}/`,
        );

        const final = await result.json();

        arr.push({
          id: i + 1,
          pokeIMG: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i + 1}.png`,
          name: final.name,
        });
      }

      setPoke(arr);
    };
    fetchData();
  }, []);

  console.log(poke);

  return <img />;
}
