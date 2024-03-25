import React, { useEffect, useRef, useState } from 'react'
import plus from "../src/vecteezy_plus-sign-icon_11912003.png";
import "../src/style.css"
import { useGlobalContext } from './App';
import { gsap } from "gsap";
import { useXarrow } from 'react-xarrows';
import Draggable from "react-draggable";
import BarChart  from './barchart';

const Childnode = (props) => {
    const {childnodes,setChildnodes,setTemporaryref,temporaryref} = useGlobalContext();
    const [positive,setPositive]=useState(0);
    const [negative,setnegative]=useState(0);
    const [comment,setComment]=useState(0);
    const [nodeinput,setNodeinput]=useState("");
    const refofgraph=useRef();
    const refofinput=useRef();

    useEffect(()=>{
        if(targetRef.current){
        gsap.to(".nodestylechild", {opacity: 1})
        }
    },[])

    useEffect(()=>{
        if(targetRef.current){
        console.log(childnodes[childnodes.length-1].childparentref.current,targetRef.current)
        setTemporaryref((prevtemporaryref)=>{
            return [...prevtemporaryref,{parentref1:childnodes[childnodes.length-1].childparentref,childref:targetRef}]
        }) 
        if(refofgraph.current){
                targetRef.current.addEventListener("mouseover",(()=>{
                        refofgraph.current.style.display="block";
            }))
            targetRef.current.addEventListener("mouseout",(()=>{
                refofgraph.current.style.display="none";
    }))
        }
        if(refofinput.current){
                targetRef.current.addEventListener("mouseover",(()=>{
                        refofinput.current.style.display="block";
            }))
            targetRef.current.addEventListener("mouseout",(()=>{
                refofinput.current.style.display="none";
    }))
        }
    }
    },[])

    const targetRef =useRef();
    let targetrefpos;
    const updateXarrow = useXarrow();
    
  return (
    <>
     <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
    <div className='nodestyle nodestylechild' style={{backgroundColor:`${props.background_color}`, left:props.xpos,top:props.ypos,cursor:"pointer"}} ref={targetRef}>
    <div><input className='inputsection' onChange={(e)=>{
        setNodeinput(e.target.value);
    }}></input></div>
      <div className='plus childplus'>
      <img src={plus} className='plusicon' onClick={()=>{
        targetrefpos=targetRef.current.getBoundingClientRect()
     setChildnodes((childnodes)=>{
        if(window.innerWidth > 764){
            return [...childnodes,{backgroundColor:props.background_color,childparentref:targetRef,xpos:targetrefpos.x + 250,ypos:targetrefpos.y}]
          }
          else{
            return [...childnodes,{backgroundColor:props.background_color,childparentref:targetRef,xpos:targetrefpos.x,ypos:targetrefpos.y}]
          }
     })

      }} alt="plusimage"></img>
        </div>
    <div className='barsection' ref={refofgraph}>
    <BarChart textdata={nodeinput} maindata={[positive,negative,comment]}></BarChart>
    </div>
    <div className='barsection barsectioninput' ref={refofinput}>

        <label htmlFor="inputforpositive">Positive</label>
    <input type='number' min={0} onChange={(e)=>{
        setPositive(e.target.value)
    }} id='inputforpositive'></input>

    <label htmlFor="inputfornegative">Negative</label>
    <input type='number' min={0} id='inputfornegative' onChange={(e)=>{
        setnegative(e.target.value)
    }}></input>

    <label htmlFor="inputforcomment">Comment</label>
    <input type='number' min={0} id='inputforcomment' onChange={(e)=>{
        setComment(e.target.value)
    }}></input>
    </div>
    </div>
    </Draggable>
    </>
  )
}

export default Childnode