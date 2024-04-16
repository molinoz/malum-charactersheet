import React from "react";
import malum from "../../malum";
import PointBuyAbilityBoard from "../../../../../components/molecules/PointBuyAbilityBoard";
import SkillBoard from "../../../../../components/molecules/SkillBoard";

export default function MalumAttributes({character, updateCharacter}) {
    return (
        <>
            <header>
                <h1>Attributes</h1>
            </header>
            <PointBuyAbilityBoard character={character} updateCharacter={updateCharacter}/>
            <SkillBoard type="Combat" character={character} updateCharacter={updateCharacter}/>
            <SkillBoard type="Utility" character={character} updateCharacter={updateCharacter}/>
        </>
    )
}