import { useEffect, useReducer } from "react";
import "../style.css";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";

const initialState = {
  questions: [],

  //differnt state of the application = 'loading','error','ready','active','finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore:0
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
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
      return { ...state, index: state.index + 1 ,answer:null};
    case "finished":
      return{...state,status:"finished",highscore:state.points>state.highscore?state.points:state.highscore}
    case "restart":
      return{...initialState,questions:state.questions,status:'ready'}
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer,points,highscore } = state;
  const sum = questions.reduce((accumulator,current)=>accumulator+current.points,0)
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} length={questions.length} />
        )}
        {status === "active" && (
          <>
            <Progress length={questions.length} index={index} sum={sum} points={points} answer={answer}/>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} length={questions.length} index={index}/>

          </>
        )}
        {status ==='finished' && <FinishedScreen points={points} sum={sum} highscore={highscore} dispatch={dispatch}/>}
      </Main>
    </div>
  );
}
export default App;
