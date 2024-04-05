import React from "react";
import { Routes, Route } from "react-router-dom";

import { malum } from "../malum";

import MalumInfo from "./pages/MalumInfo";
import MalumAttributes from "./pages/MalumAttributes";
import MalumTurnPlanner from "./pages/MalumTurnPlanner";
import MalumFeatures from "./pages/MalumFeatures";
import MalumInventory from "./pages/MalumInventory";
import MalumSpellList from "./pages/MalumSpellList";

export default function MalumCharactersheet({character, updateCharacter}) {

    return (
        <>
            <Routes>
                <Route path="/info" element={<MalumInfo character={character} updateCharacter={updateCharacter}/>} />
                <Route path="/attributes" element={<MalumAttributes character={character} updateCharacter={updateCharacter}/>} />
                <Route path="/turn-planner" element={<MalumTurnPlanner character={character} updateCharacter={updateCharacter}/>} />
                <Route path="/features" element={<MalumFeatures character={character} updateCharacter={updateCharacter}/>} />
                <Route path="/inventory" element={<MalumInventory character={character} updateCharacter={updateCharacter}/>} />
                <Route path="/spell-list" element={<MalumSpellList character={character} updateCharacter={updateCharacter}/>} />
            </Routes>
        </>
    )
}