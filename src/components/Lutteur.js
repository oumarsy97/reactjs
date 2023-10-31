import React from 'react'

export default function Lutteur({lutteur, onDelete}) {
  return (
    <div>
    {lutteur.pseudo}&nbsp; 
    <button onClick={() => onDelete(lutteur.id)}>X</button> 
    </div>
  )
}
