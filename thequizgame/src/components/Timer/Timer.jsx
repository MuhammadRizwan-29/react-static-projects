import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemainig }) {
  const mins = Math.floor(secondsRemainig / 60);
  const seconds = secondsRemainig % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      <h3>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </h3>
    </div>
  );
}
