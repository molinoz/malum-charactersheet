import React from "react";
import { roll } from 'dnd5e-dice-roller';
import { useState, useEffect } from "react";
import { malum } from "../../Content/Systems/Malum/malum";
import NumInput from "./NumInput";

function AbilityBox({character ,updateCharacter, ...props}) {
    const [inc, setInc] = useState(props.inc)
    let aScore = props.baseScore + inc;

    function abilityMod(score) {
        return Math.floor((score - 10)/2)
    };
    function modSym(n) {
        return (n<0?"":"+") + n;
    };
    let baseMod = abilityMod(aScore);
    let miscMod = 0;
    let totalMod = baseMod + miscMod;
    function rollClick() {
        let ran = roll("d20");
        console.log(`${ran}${modSym(totalMod)}`)
        return console.log(`${props.name}: ${ran+totalMod}`)
    }

    useEffect(() => {
        let updatedChar = malum.update.attri.stats.inc(character, inc, props.name);
        updatedChar = malum.update.attri.stats.incCost(updatedChar, malum.get.stats.incCost(inc), props.name);
        updatedChar = malum.update.attri.stats.score(updatedChar, aScore, props.name);
        updatedChar = malum.update.attri.stats.mod(updatedChar, abilityMod(aScore), props.name);
        updatedChar = malum.update.attri.stats.totalMod(updatedChar, totalMod, props.name);
        updateCharacter(updatedChar)
    },[inc]);

    return (
      <>
        <section className="Box">
            <section className="outline">
                <p>{props.name}</p>
            </section>
            <button onClick={rollClick} className="outline">
                <h2>{ modSym(totalMod) }</h2>
            </button>
            <section className="outline">
                <p>{aScore}</p>
            </section>
            <section className="spinNum outline" style={{display:'flex', flexDirection:'row'}}>
                <p>{inc}</p>
                <NumInput onChange={setInc} value={inc} max={6} min={-2}/>
            </section>
            <p>{character.attri.stats[props.name].incCost}</p>
        </section>
      </>
    );
}


export default AbilityBox;