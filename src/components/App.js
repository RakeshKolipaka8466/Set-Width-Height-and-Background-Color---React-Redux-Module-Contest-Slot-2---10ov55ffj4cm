import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [newBox,setNewBox] = useState([]);

  const handleWidth = (e)=>{
    setWidth(e.target.value);
  };
   const handleHeight = (e)=>{
    setHeight(e.target.value);
  };
   const handleBackground = (e)=>{
    setBackgroundColor(e.target.value);
  };
   const handleButton = ()=>{
    if(width && height &&  backgroundColor){
    const box ={width:`${width}px`,
                height:`${height}px`,
                backgroundColor
                };
    setNewBox([...newBox,box]);
    
    setWidth("");
    setHeight("");
    setBackgroundColor("");
    }
  };
  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"onChange={handleWidth} value={width}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"onChange={handleHeight} value={height}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"onChange={handleBackground} value={backgroundColor}
        />
      </div>
      <button className='create-btn'onClick={handleButton}>Create Box</button>
      <div id="box-container">
       {newBox.map((box,index)=>(
        <div 
        key={index}
        style = {{
        width:box.width,
        height:box.height,
        backgroundColor:box.backgroundColor,
      }}>
        </div>
  ))}
      </div>
    </div>
  );
};


export default App;
