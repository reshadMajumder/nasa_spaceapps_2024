import React from 'react';
import './nasaTv.css';

function NasaTv({ url }) {
  return (
    <div style={{marginTop:50,marginBottom:50}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:"100%",height:550,borderRadius:16,overflow: "hidden"}}>
          <iframe
            src={url}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Live Website Viewer"
          />
        </div>
      </div>
    </div>
  );
}

export default NasaTv;
