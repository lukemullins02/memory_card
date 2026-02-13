import "../styles/score.css";

export default function Score({ score, highScore }) {
  return (
    <div className="scoreboard">
      <p>Current Score: {score}</p>
      <p>High Score: {highScore} </p>
    </div>
  );
}
