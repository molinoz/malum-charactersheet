import React from "react";
import NumInput from "../atoms/NumInput.js"
import { useState } from "react";

export default function LabeledInput({id,type,choices, min, max, property}) {
    const [num, setNum] = useState(0);
    switch(type){
        case 'text':
            return (
                <>
                    <label for={id}>{id}</label>
                    <input type="text" id={id}/>
                </>
            )
        case 'solotext':
            return (<input type="text" placeholder={id}/>)
        case 'dropList':
            return (
                <>
                    <label for={id}>{id}</label>
                    <input id={id} value="Droplist"/>
                </>
            );
        case 'numSpin':
            return(
                <>
                    <label for={id}>{id}</label>
                    <section className="spinNum outline" style={{display:'flex', flexDirection:'row'}}>
                        <p>{num}</p>
                        <NumInput onChange={setNum} value={num} max={max} min={min}/>
                    </section>
                </>
            );
        case 'textList':
            return(
                <>
                    <label for={id}>{id}</label>
                    <input id={id} value="textList"/>
                </>
            );
        case 'textarea':
            return(
                <>
                    <textarea id={id}/>
                </>
            );
        default:
            return <p>ERROR</p>
    }; 
}