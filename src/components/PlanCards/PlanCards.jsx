import React,{useState,useEffect,useRef} from 'react'
import "./PlanCards.css"

function PlanCards({data,index}) {
  const cardMainRef = useRef(null);
 
  return (
    <div className="card-main" ref={cardMainRef} style={{borderColor:data.color}}>        
      <div className="cardtop" style={{color:data.color}}>
        <h1>{data.name}</h1>
      </div>
      <div className="cardmid" style={{color:data.color}}>
        <h2>•&nbsp;&nbsp;{data.features[0]}</h2>
        <h2>•&nbsp;&nbsp;{data.features[1]}</h2>
        <h2>•&nbsp;&nbsp;{data.features[2]}</h2>        
        <h2>•&nbsp;&nbsp;{data.features[3]}</h2>
        <h2>•&nbsp;&nbsp;{data.features[4]}</h2>
      </div>
      <div className="cardbottom" style={{color:data.color}}>
        <h1>{data.price}</h1>
        <button style={{backgroundColor:data.color}}>Subscribe</button>
      </div>
    </div>
  )
}

export default PlanCards
