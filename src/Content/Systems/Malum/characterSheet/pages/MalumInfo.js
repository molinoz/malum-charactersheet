import React from "react";
import { malum } from "../../malum";

export default function MalumInfo({character, updateCharacter}) {
    return (
        <>
            <header>
                <h1>Info</h1>
                <input type="text" value={character.info.file} onChange={(event) => {malum.update.info.file(character, updateCharacter, event);}} />
            </header>
            <section>
                <img />
                <section>
                    <div className="names"></div>
                    <section>
                        <div className="infoblocks"></div>
                        <div className="infoblocks"></div>
                    </section>
                </section>
            </section>
            <section>
                <div className="infoblocks"></div>
                <div className="infoblocks"></div>
                <div className="infoblocks"></div>
            </section>
            <section>
                <div className="infoblocks"></div>
                <div className="infoblocks"></div>
            </section>
        </>
    )
}