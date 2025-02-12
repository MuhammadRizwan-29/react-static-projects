// import DatePicker from "./components/DatePicker/DatePicker";

import { useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import StartScreen from "./components/StartScreen/StartScreen";
import Question from "./components/Question/Question";
import NextButton from "./components/NextButton/NextButton";
import Progress from "./components/Progress/Progress";
import FinishScreen from "./components/FinishScreen/FinishScreen";
import Timer from "./components/Timer/Timer";
const SECS_PER_QUESTIONS = 30;
const initialState = {
  questions: [],
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemainig: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemainig: state.questions.length * SECS_PER_QUESTIONS,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemainig: state.secondsRemainig - 1,
        status: state.secondsRemainig === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("No data founded");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemainig },
    dispatch,
  ] = useReducer(reducer, initialState);
  const totalQuiz = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      {/* <DatePicker /> */}
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen totalQuiz={totalQuiz} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              totalQuiz={totalQuiz}
              points={points}
              totalPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <footer>
              <Timer dispatch={dispatch} secondsRemainig={secondsRemainig} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                totalQuiz={totalQuiz}
              />
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
