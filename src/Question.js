export default function Question({question,dispatch,answer}) {
  const hasAnswered = answer !==null
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option,index)=>{
          return <button className={`btn btn-option ${index===answer ?"answer":""} ${hasAnswered?index===question.correctOption?'correct':'wrong':""}`} onClick={()=>dispatch({type:"newAnswer",payload:index})} key={option} disabled={hasAnswered }>{option}</button>
        })}
      </div>
    </div>
  )
}


