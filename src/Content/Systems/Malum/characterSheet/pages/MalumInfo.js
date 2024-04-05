import React from "react";
import malum from "../../malum";

export default function MalumInfo({character, updateCharacter}) {
    const handleChange = (event) => {
        updateCharacter({...character, main: {...character.main, name: event.target.value}});
    };
    return (
        <>
            <header>
                <h1>Info</h1>
                <input type="text" value={character.info.fullName} onChange={handleChange} />
            </header>
            <section>
                <img />
                <section>
                    <names></names>
                    <section>
                        <infoblock></infoblock>
                        <infoblock></infoblock>
                    </section>
                </section>
            </section>
            <section>
                <infoblock></infoblock>
                <infoblock></infoblock>
                <infoblock></infoblock>
            </section>
            <section>
                <infoblock></infoblock>
                <infoblock></infoblock>
            </section>
        </>
    )
}