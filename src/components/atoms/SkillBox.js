import React from "react";
import '../Styles/mystyle.css';
import { useState, useEffect } from "react";
import NumInput from "./NumInput";
import { malum } from "../../Content/Systems/Malum/malum";
import { roll } from "dnd5e-dice-roller";
export default function SkillBox({character, updateCharacter, name, baseMod, cat, ...props}) {
    const [level, setLevel] = useState(props.lvl);
    let abilMod = malum.get.stats.mod(character, baseMod);
    let training = malum.use.training.numToLvl(level);
    let trainingMod = malum.use.training.mod(training);
    let totalMod = trainingMod+abilMod;
    let trainingCost = malum.use.training.cost(training);
    useEffect(() => {
        let updatedChar = malum.update.attri.skills.level(character, cat, level, name);
        updatedChar = malum.update.attri.skills.mod(character, cat, totalMod, name);
        updatedChar = malum.update.attri.skills.cost(character, cat, trainingCost, name); 
        updateCharacter(updatedChar)
    },[level]);
    function modSym(n) {
        return (n<0?"":"+") + n;
    };
    function rollClick() {
        let ran = roll("d20");
        console.log(`${ran}${modSym(totalMod)}`)
        return console.log(`${name} Skill: ${ran+totalMod}`)
    }
    return(
        <div className="Box skill">
            <section className="spinNum outline" style={{display:'flex', flexDirection:'row'}}>
                <p>{training}</p>
                <NumInput onChange={setLevel} value={level} max={7} min={0}/>
            </section>
            <section className="outline length1">
                <p>{baseMod}</p>
            </section>
            <section className="outline length2">
                <p>{name}</p>
            </section>
            <section className="outline">
                <button onClick={rollClick}>{modSym(totalMod)}</button>
            </section>
        </div>
    )
}