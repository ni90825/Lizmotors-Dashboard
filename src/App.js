import logo from './logo.svg';
import './App.css';
import Node from './genNode';
import { useEffect, useState, createContext, useContext, useRef, } from 'react';
import Childnode from './Childnode';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
// import Draggable from "react-draggable";

const MyContext = createContext();

function App() {
  let array_phases=["Market Research","Planning","Design","Manufacturing","Sales"];
  let background_color=["#845EC2","#D65DB1","#FF6F91","#FF9671","#f8a1a1"];
  const element = [];
  const parentref=useRef();
  let childref=useRef([]);
  const [childnodes,setChildnodes]=useState([]);
  const [temporaryref,setTemporaryref]=useState([]);

  useEffect(()=>{ 
    for(let i=0;i<temporaryref.length;i++){
      document.getElementsByClassName("mainapp")[0].addEventListener('scroll', function() {
        temporaryref[i].childref.style.top = `${document.getElementsByClassName("mainapp")[0].scrollLeft}px`;
      });
    }   
  },[])

  return (
    <MyContext.Provider value={{element,parentref,childnodes,setChildnodes,temporaryref,setTemporaryref}}>
    <Xwrapper>
    <div className="App" ref={parentref}>
    <div className='Heading'>
          <div className='mainheading'>Lizmotors Dashboard</div>
          <div className='subheading'>Responsive dashboard allowing user to dynamically create nodes and enter the data for graph.
</div>
        </div>
      <div className='mainapp'>

      <div className='firstphase'>
        {
          array_phases.map((item,index)=>{
           return( <Node key={item} nodename={item} background_color={background_color[index]}></Node> )
          })
        }
      </div>

      {childnodes && childnodes.map((items,index)=>{
        return(
          <>
          <Childnode background_color={items.backgroundColor} xpos={items.xpos} ypos={items.ypos} key={index} id={index}></Childnode>
        </>
        )
      })}

{temporaryref && temporaryref.map((items,index)=>{
        return(
          <>
          <Xarrow
                start={items.parentref1} 
                end= {items.childref}
                color={"black"}
                zIndex={0}
                strokeWidth={1}
                animateDrawing={0.2}
                dashness={false}
                headSize={5}
            />

        </>
        )
      })}
      </div>

      </div>
      </Xwrapper>
  </MyContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(MyContext);
};

export default App;
