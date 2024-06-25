import React from "react";
import { malum } from "../../malum";
import Box from "../../../../../components/atoms/Box.js";
import LabeledInput from "../../../../../components/atoms/LabeledInput.js";

export default function MalumInfo({character, updateCharacter}) {
    return (
        <>
            <header >
                <h1 style={{margin: "10px"}}>Info</h1>
                {/* <input type="text" value={character.info.file} onChange={(event) => {malum.update.info.file(character, updateCharacter, event);}} /> */}
            </header>
            <main style={{display: "flex", flexDirection: "column", width: "600px"}}>
                <section id="section1" className="infoSection" style={{border: "0px", flexGrow:"1",}}>
                    <LabeledInput id="Avatar" type="image"/>
                    <section>
                        <section className="Names">
                            <LabeledInput id="Character Name" type="solotext"/>
                            <LabeledInput id="Player Name" type="solotext"/>
                        </section>
                        <section  className="infoSection" style={{margin:"0px"}}>
                            <Box id="Background">
                                <LabeledInput id="Origin" type="dropList" choices="Origin" property=""/>
                                <LabeledInput id="History" type="dropList" choices="History"  property=""/>
                            </Box>
                            <Box id="Fate">
                                <LabeledInput id="Star Sign" type="dropList" choices="Signs"  property=""/>
                                <LabeledInput id="Tarot Card" type="dropList" choices="Cards"  property=""/>
                            </Box>
                        </section>
                    </section>
                </section>
                <section id="section2" className="infoSection">
                    <Box id="Role">
                        <LabeledInput id="Level" type="numSpin" min={0} max={20}  property=""/>
                        <LabeledInput id="Archetype" type="dropList" choices="Archetype"  property=""/>
                        <LabeledInput id="Subtype" type="dropList" choices="Subtype" property=""/>
                    </Box>
                    <Box id="Description">
                        <LabeledInput id="Age" type="text"  property=""/>
                        <LabeledInput id="Height" type="text"  property=""/>
                        <LabeledInput id="Weight" type="text"  property=""/>
                    </Box>
                    <Box id="Relations"  style={{flexGrow:"3"}}>
                        <LabeledInput id="Membership" type="textList" property=""/>
                        <LabeledInput id="Allies" type="textList" property=""/>
                        <LabeledInput id="Enemies" type="textList" property=""/>
                    </Box>
                </section>
                <section id="section3" className="infoSection" style={{display: "block"}}>
                    <Box id="Backstory">
                        <LabeledInput id="Backstory" type="textarea" property=""/>
                        <LabeledInput id="Culture" type="textList" property=""/>
                    </Box>
                    <section style={{display: "flex", border: "solid black 1px"}}>
                        <div style={{flexGrow: '1'}}>
                            <LabeledInput id="Campaign" type="text" property=""/>
                        </div>
                        <div style={{flexGrow: '1', borderLeft:'solid black 2px'}}>
                            <LabeledInput id="System" type="text" property=""/>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}