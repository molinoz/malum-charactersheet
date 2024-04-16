import React from "react";
import { roll } from 'dnd5e-dice-roller';
import { useState, useEffect } from "react";
import { malum } from "../../Content/Systems/Malum/malum";

function AbilityBox({character ,updateCharacter, ...props}) {
    const [inc, setInc] = useState(props.inc)
    let aScore = props.baseScore + inc;

    function abilityMod(score) {
        return Math.floor((score - 10)/2)
    };
    function modSym(n) {
        return (n<0?"":"+") + n;
    };
    let abilMod = modSym(abilityMod(aScore))
    function rollClick() {
        let mod = parseInt(abilMod);
        let ran = roll("d20");
        console.log(`${ran}${abilMod}`)
        return console.log(ran+mod)
    }
    useEffect(() => {
        malum.update.attri.stats.incCost(character, updateCharacter, malum.get.stats.incCost(inc), props.name);
        setTimeout(malum.update.attri.stats.score(character, updateCharacter, aScore, props.name), 100)
    },[inc]);

    return (
      <>
        <section className="Box">
            <section className="outline">
                <p>{props.name}</p>
            </section>
            <button onClick={rollClick} className="outline">
                <h2>{ abilMod }</h2>
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
                value={inc}
                onkeydown={(event) => {
                    event.preventDefault();
                  }}
                onChange={(event) => {
                    setInc(parseInt(event.target.value));
                    malum.update.attri.stats.inc(character, updateCharacter, event, props.name);
                    console.log("cost is:", malum.get.stats.incCost(event.target.value))
                }}
            />
            <p>{character.attri.stats[props.name].incCost}</p>
        </section>
      </>
    );
}


export default AbilityBox;