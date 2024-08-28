import React from "react";

export default function Input(){
    switch(data.form) {
        case 'text':
            return(
                <div>
                    <input type="text"/>
                </div>
            )
        case 'area':
            return()
        case 'number':
            return()
        default:
            return(
                <>
                    <h1>Input:</h1>
                    <p>ERROR</p>
                </>
            )
    }
}