import React from "react";
import malum from "../../malum";

export default function MalumTurnPlanner({character, updateCharacter}) {
    const handleChange = (event) => {
        updateCharacter(event.target.value);
    };
    return (
        <>
            <header>
                <h1>Turn Planner</h1>
            </header>
        </>
    )
}