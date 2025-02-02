export default function StartScreen({ totalQuiz, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz World!!!</h2>
      <h3>{totalQuiz} questions of test your react-mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
