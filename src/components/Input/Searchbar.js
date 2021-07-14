import React from 'react';
// import "./splash.css"



export default function ColorTextFields({input,setInput}) {

  return (
        <div className="search">
        <div type="submit">
          <input  value={input} onChange={(e)=>setInput (e.target.value)} style={{outline:"none",borderRadius:"8px",width:"200px",background:"#F2F3F2",border:"none",padding:"8px",fontFamily:"Arial, FontAwesome"}} placeholder="&#xF002; Search store"></input>
    </div>
        </div>
  

  );
}