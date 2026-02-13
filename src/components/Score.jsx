export default function Score({ score, highScore }) {
  return (
    <div>
      <p>Current Score: {score}</p>
      <p>High Score: {highScore} </p>
    </div>
  );
}
