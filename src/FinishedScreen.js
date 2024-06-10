import React from 'react'

export default function FinishedScreen({points,sum,highscore,dispatch}) {
  return (<>
    <p className='result'>You scored <strong>{points} </strong>out of the {sum}</p>
    <p className="highscore">highscore{highscore}</p>
    <button className="btn" onClick={()=>dispatch({type:"restart"})}>Restart Quiz</button>
    </>
  )
}
