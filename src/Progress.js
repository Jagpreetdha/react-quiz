import React from 'react'

export default function Progress({length,index,points,sum,answer}) {
  return (
    <header className='progress'>
      <progress max={length} value={index+Number(answer!==null)}></progress>
      <p>Question <strong>{index+1}/{length}</strong></p>
      <p><strong>{points}/</strong>{sum}</p>
    </header>
  )
}
