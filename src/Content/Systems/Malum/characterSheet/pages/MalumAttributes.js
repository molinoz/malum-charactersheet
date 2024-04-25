import React from "react";
import { malum } from "../../malum";
import { pow } from "../../../../../components/baseSystem/pow";
import { useState } from "react";
import PointBuyAbilityBoard from "../../../../../components/molecules/PointBuyAbilityBoard";
import SkillBoard from "../../../../../components/molecules/SkillBoard";

export default function MalumAttributes({character, updateCharacter}) {
    let skillCap = character.attri.stats.INT.totalMod;
    let spentSP = pow.props.sum(character.attri.skills.Combat, 'levelCost') + pow.props.sum(character.attri.skills.Utility, 'levelCost');
    let learnedSkills = malum.get.skills.learned(character.attri.skills);
    console.log("Skills Learned:", learnedSkills)
    let SP = character.attri.SPI + character.attri.baseSPI - spentSP;
    return (
        <>
            <header>
                <h1>Attributes</h1>
            </header>
            <PointBuyAbilityBoard character={character} updateCharacter={updateCharacter}/>
            <div>
                <h1>Skills</h1>
                <p>Additional Trained skills: {learnedSkills}/{skillCap}</p>
                <p>Skill points: {SP}</p>
                <SkillBoard type="Combat" character={character} updateCharacter={updateCharacter}/>
                <SkillBoard type="Utility" character={character} updateCharacter={updateCharacter}/>
            </div>
        </>
    )
}