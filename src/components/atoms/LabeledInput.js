import React from "react";
import NumInput from "../atoms/NumInput.js"
import Avatar from "./Avatar.js";
import DropdownSelect from "./DropdownSelect.js";
import TextList from "./TextList.js";
import { useState } from "react";

export default function LabeledInput({id,type,choices,min,max,img,character}) {
    const [num, setNum] = useState(0);
    switch(type){
        case 'text':
            return (
                <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <label for={id}>{id}:</label>
                    <input type="text" id={id}/>
                </div>
            )
        case 'solotext':
            return (<input type="text" placeholder={id}/>)
        case 'dropList':
            return (
                <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <label for={id}>{id}:</label>
                    <DropdownSelect choices={choices}/>
                </div>
            );
        case 'numSpin':
            return(
                <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <label for={id}>{id}:</label>
                    <section className="spinNum outline" style={{display:'flex', flexDirection:'row'}} id={id}>
                        <p>{num}</p>
                        <NumInput onChange={setNum} value={num} max={max} min={min}/>
                    </section>
                </div>
            );
        case 'textList':
            return(
                <>
                    <TextList id={id}/>
                </>
            );
        case 'textarea':
            return(
                <div>
                    <textarea id={id} style={{width:"570px", height:"200px", resize: 'none'}}/>
                </div>
            );
        case 'image':
            return(
                <div>
                    <Avatar />
                </div>
            );
            

        default:
            return <p>ERROR</p>
    }; 
}