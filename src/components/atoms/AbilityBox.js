import React from "react";
import { roll } from 'dnd5e-dice-roller';
import { useState } from "react";

function AbilityBox(props) {
    const [inc, setInc] = useState(0)
    let aScore = 10 + inc;

    function scorePrice(n) {
        return n<5?n:(4+((n-4)*2))
    };
    function abilityMod(score) {
        return Math.floor((score - 10)/2)
    };
    function modSym(n) {
        return (n<0?"":"+") + n;
    };
    let abilMod = 3
    function rollClick() {
        return console.log(roll("d20")+abilMod)
    }

    return (
      <>
        <section className="Box">
            <section className="outline">
                <p>{props.name}</p>
            </section>
            <button onClick={rollClick} className="outline">
                <h2>{ modSym(abilityMod(aScore)) }</h2>
            </button>
            <section className="outline">
                <p>{aScore}</p>
            </section>
            <input
                className="outline"
                id="increase"
                type="number"
                max={6}
                min={-2}
                placeholder={inc}
                onChange={e => setInc(parseInt(e.target.value))}
            />
            {/* <p>{scorePrice(inc)}</p> */}
        </section>
      </>
    );
}


export default AbilityBox;