import React from "react";
import "./vr.css";

function Vr() {
  return (
    <div className="vrContainer">
      <div style={{display:"flex",alignItems:"center",width:"100%",paddingTop:20}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            alignItems: "start",
          }}
        >
          <h1>VR Coming Soon</h1>
          <p style={{ fontSize: 28 }}>
            We're working on bringing you an exciting virtual reality
            experience. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vr;
