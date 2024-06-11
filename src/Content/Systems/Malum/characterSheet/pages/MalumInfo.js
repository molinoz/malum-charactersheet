import React from "react";
import { malum } from "../../malum";
import Box from "../../../../../components/atoms/Box.js";

export default function MalumInfo({character, updateCharacter}) {
    return (
        <>
            <header>
                <h1>Info</h1>
                <input type="text" value={character.info.file} onChange={(event) => {malum.update.info.file(character, updateCharacter, event);}} />
            </header>
            <main>
                <section id="section1">
                    <img></img>
                    <section>
                        <section className="Names">
                            <input type="text" id="characterName"/>
                            <input type="text" id="playerName"/>
                        </section>
                        <section>
                            <Box id="Background"></Box>
                            <Box id="Fate"></Box>
                        </section>
                    </section>
                </section>
                <section id="section2">
                    <Box id="Role"></Box>
                    <Box id="Description"></Box>
                    <Box id="Relations"></Box>
                </section>
                <section id="section3">
                    <Box id="Backstory">
                        <textarea/>
                    </Box>
                    <section>
                        <Box />
                        <Box />
                    </section>
                </section>
            </main>
        </>
    )
}