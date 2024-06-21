import React from "react";
import NumInput from "../atoms/NumInput.js"
import { useState } from "react";

export default function LabeledInput({id,type,choices,min,max,img,property}) {
    const [num, setNum] = useState(0);
    switch(type){
        case 'text':
            return (
                <div>
                    <label for={id}>{id}:</label>
                    <input type="text" id={id}/>
                </div>
            )
        case 'solotext':
            return (<input type="text" placeholder={id}/>)
        case 'dropList':
            return (
                <div>
                    <label for={id}>{id}:</label>
                    <input id={id} value="Droplist"/>
                </div>
            );
        case 'numSpin':
            return(
                <div style={{display:'flex', flexDirection:'row'}}>
                    <label for={id}>{id}:</label>
                    <section className="spinNum outline" style={{display:'flex', flexDirection:'row'}} id={id}>
                        <p style={{}}>{num}</p>
                        <NumInput onChange={setNum} value={num} max={max} min={min}/>
                    </section>
                </div>
            );
        case 'textList':
            return(
                <div>
                    <label for={id}>{id}:</label>
                    <input id={id} value="textList"/>
                </div>
            );
        case 'textarea':
            return(
                <div>
                    <textarea id={id} style={{width:"114vh", height:"200px"}}/>
                </div>
            );
        case 'image':
            let non = "https://unpkg.com/pixelarticons@1.8.0/svg/avatar.svg";
            return(
                <div>
                    <img src={img?img:non} style={{width: "110px", border: "solid black 2px", marginRight:"10px"}}/>
                </div>
            );
        default:
            return <p>ERROR</p>
    }; 
}