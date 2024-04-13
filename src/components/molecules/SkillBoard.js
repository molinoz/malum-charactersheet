import React from "react";
import '../Styles/mystyle.css';
import { useState } from "react";
import SkillBox from "../atoms/SkillBox";

export default function SkillBoard({type, character, updateCharacter,}) {

    return(
        <div className="SkillBoard">
            <div className="Part outline">
                <h1>{type} Skills</h1>
                <section className="outline">
                    {Object.values(character.attri.skills[type]).map((skill, index) => (
                        <SkillBox key={index} name={skill.skillname} baseMod={skill.baseMod}  updateCharacter={updateCharacter} character={character}/>
                    ))}
                </section>
            </div>
        </div>
    );
}