import React from "react";
import { useState } from "react";
import AbilityBox from "../atoms/AbilityBox";
import '../Styles/mystyle.css'

export default function PointBuyAbilityBoard(props) {
    const [ASI, setASI] = useState(0)
    let ASP = 8 + ASI;

    return(
        <div>
            <section className="Board">
                <section className="Part">
                    <h1>Main Abilities</h1>
                    <section className="Board outline">
                        <AbilityBox name="ATK"/>
                        <AbilityBox name="SPL"/>
                        <AbilityBox name="DEF"/>
                        <AbilityBox name="FRI"/>
                    </section>
                </section>
                <section className="Part">
                    <h4>Ability Points: {ASP}</h4>
                </section>
            </section>
        </div>
    );
}

