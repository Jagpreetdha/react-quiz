export default function StartScreen({length,dispatch}) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{length} questions to test your react knowledge</h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'start'})}>Start Now</button>
    </div>
  );
}

