import "../styles/card.css";

export default function Card({ poke }) {
  const pokeImgs = poke.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.pokeIMG} />
      <p>{item.name}</p>
    </div>
  ));
  return <div className="container">{pokeImgs}</div>;
}
