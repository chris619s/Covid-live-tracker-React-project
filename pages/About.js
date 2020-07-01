import React from "react";


function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
        textalign: "center",
      }}
      
    >
      
      <br />
      <h2 style={{ textAlign: "center" }}>About</h2>
      <br />
    <div style={{textAlign: "center"}} > 
      <img 
        height ="300"
        src="coder.jpg"
        border="0"
        alt="Hello World"
        textAlign="center"
      

        
      />
     </div> 
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
          textalign: "center",
        }}
      > 
        <h4 style={{ textAlign: "center"}}>Who built this website?</h4>
        <div style={{ fontSize: "20px" , textAlign: "center" }}>
           This site is Created by Christopher Clement. A guy with mind full of Dreams.
        </div>
        <br />
        <h4  style={{ textAlign: "center"}}>How to connect?</h4>
        <div style={{ fontSize: "20px" , textAlign : "center" }}>
           you can connect me via.......{ " "}.
        </div>
      </div>     
    </div>
   );   
 }

 export default About;
 