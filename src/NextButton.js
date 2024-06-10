import React from "react";

export default function NextButton({ dispatch, answer, length,index }) {
  if (answer === null) return null;
  if (index < length - 1) {
    return (
      <button
        className="btn btn-ul"
        onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );
  }
  if (index ===length - 1) {
    return (
      <button
        className="btn btn-ul"
        onClick={() => dispatch({ type: "finished" })}>
        finished
      </button>
    );
  }
}
