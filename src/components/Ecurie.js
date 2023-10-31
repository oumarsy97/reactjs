import React, { useState } from 'react'
import Lutteur from './Lutteur'

export default function Ecurie(props) {
  const [lutteurs, setLutteurs] = useState([
    {id:1, pseudo: "Yawu Diaal"},
    {id:2, pseudo: "Siteu"},
    {id:3, pseudo: "Ama Baldé"}
  ]);
if(!lutteurs.length) {
  return(
    <div>
      <h1>La liste des lutteurs de l'écurie {props.nom}</h1>
      <p>Aucun lutteur</p>
    </div>
  )
}
  return (
    <div>
      <h1>La liste des lutteurs de l'écurie {props.nom}</h1>
      <ul>
      
        {lutteurs.map(lutteur => (
          <Lutteur pseudo={lutteur.pseudo} key={lutteur.id}/>
        ))}
      </ul>
    </div>
  );

}
