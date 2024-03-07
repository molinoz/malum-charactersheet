import React from "react";
import { diceRoller, roll } from 'dnd5e-dice-roller'
import { useState } from "react";

function AbilityBox(props) {
    const [inc, setInc] = useState(0)
    let aScore = 10 + inc;

    function scorePrice(n) {
        return n<4?n:(4+((n-4)*2))
    };
    function abilityMod(score) {
        return Math.floor((score - 10)/2)
    };
    function modSym(n) {
        return (n<0?"":"+") + n;
    };
    let abilMod = 3
    function handleclick() {
        return console.log(roll("d20")+abilMod)
    }
    function handleIncChange(e) {
        setInc(Number(e.target.value));
    }

    return (
      <div>
        <section>
            <section>
                <h1>{props.name}</h1>
            </section>
            <section>
                <button onClick={handleclick}>
                    <h2>{ modSym(abilityMod(aScore)) }</h2>
                </button>
            </section>
            <section>
                <h1>{aScore}</h1>
            </section>
            <input
                id="increase"
                type="number"
                max={6}
                min={-2}
                placeholder={inc}
                onChange={handleIncChange}
            />
            <h2>{scorePrice(inc)}</h2>
        </section>
      </div>
    );
}


export default AbilityBox;