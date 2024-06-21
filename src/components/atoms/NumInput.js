import React from "react";
import { useState, useEffect } from "react";

export default function NumInput({onChange, value, min, max}) {
    const increment = () => {
        if(value < max) {
            onChange(value + 1);
        }
    };
    const decrement = () => {
        if(value > min) {
            onChange(value - 1);
        }
    };

    // useEffect(() => {
    //     console.log(`Value changed to ${value}`)
    // }, [value])
    return(
        <div>
            <div className="spinNum" style={{display:'flex', flexDirection:'column'}}>
                <button onClick={increment} height={15} style={{
                    display:'flex', 
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                    <img src="https://unpkg.com/pixelarticons@1.8.0/svg/chevron-up.svg" width={10} style={{margin:'auto'}}/>
                </button>
                <button onClick={decrement} height={15} style={{
                    display:'flex', 
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                    <img src="https://unpkg.com/pixelarticons@1.8.0/svg/chevron-down.svg" width={10} style={{margin:'auto'}}/>
                </button>
            </div>
        </div>
    );
}