import React from "react";
import { useState } from "react";
import AbilityBox from "./AbilityBox";

function AbilityBoard(props) {
    const [API, setAPI] = useState(0)
    let APP = 8 + API;

    return(
        <div>
            <section>
                <h4>Ability Points</h4>
                <h5>{APP}</h5>
            </section>
            <AbilityBox name="STR"/>
            <AbilityBox name="AGI"/>
            <AbilityBox name="CON"/>
            <AbilityBox name="INT"/>
            <AbilityBox name="WIS"/>
            <AbilityBox name="STR"/>
        </div>
    );
}

export default AbilityBoard;