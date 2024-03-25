import React, { useRef,useEffect } from 'react'
import plus from "../src/vecteezy_plus-sign-icon_11912003.png";
import "../src/style.css"
import { useGlobalContext } from './App';
import Childnode from './Childnode';

const Node = (props) => {
  const {element,parentref,childnodes,setChildnodes,setTemporaryref,temporaryref} = useGlobalContext();
  const targetRef = useRef(null);

  let targetrefpos;
  return (
    <div>
    <div className='nodestyle' style={{backgroundColor:`${props.background_color}`}} ref={targetRef}>
      <div>{props.nodename}</div>
      <div className='plus'>
      <img src={plus} className='plusicon' onClick={()=>{
        targetrefpos=targetRef.current.getBoundingClientRect();
     setChildnodes((childnodes)=>{
    if(window.innerWidth > 764){
      return [...childnodes,{backgroundColor:props.background_color,childparentref:targetRef,xpos:targetrefpos.x + 250,ypos:targetrefpos.y}]
    }
    else{
      return [...childnodes,{backgroundColor:props.background_color,childparentref:targetRef,xpos:targetrefpos.x,ypos:targetrefpos.y}]
    }
     })

      }} alt='plus'></img>
        </div>
    </div>
    </div>
  )

}

export default Node;