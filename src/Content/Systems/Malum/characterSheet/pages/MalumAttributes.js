import React from "react";
import malum from "../../malum";
import PointBuyAbilityBoard from "../../../../../components/molecules/PointBuyAbilityBoard";

export default function MalumAttributes({character, updateCharacter}) {
    const handleChange = (event) => {
        updateCharacter(event.target.value);
    };
    return (
        <>
            <header>
                <h1>Attributes</h1>
            </header>
            <PointBuyAbilityBoard character={character} updateCharacter={updateCharacter}/>
        </>
    )
}