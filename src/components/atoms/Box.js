import React from "react";

export default function Box({children, id}){
    
    return(
        <div className="infoBlock">
            <h2>{id}</h2>
            {children}
        </div>
    );
}