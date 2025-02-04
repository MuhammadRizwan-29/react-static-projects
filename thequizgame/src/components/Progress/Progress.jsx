export default function Progress({
  index,
  totalQuiz,
  points,
  totalPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={totalQuiz} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong>/{totalQuiz}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints} points
      </p>
    </header>
  );
}
