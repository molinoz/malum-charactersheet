import React from "react";
import { useState } from "react";
import AbilityBox from "../atoms/AbilityBox";
import '../Styles/mystyle.css';
import { pow } from "../baseSystem/pow";

export default function PointBuyAbilityBoard({character, updateCharacter}) {
    const [ASI, setASI] = useState(0)
    let ASP = 8 + ASI - pow.props.sum(character.attri.stats);

    return(
        <div>
            <section className="Board">
                <section className="Part">
                    <h1>Main Abilities</h1>
                    <section className="Board outline">
                        {Object.values(character.attri.stats).map((stat, index) => (
                            <AbilityBox key={index} name={stat.short} baseScore={stat.baseScore} inc={stat.inc} updateCharacter={updateCharacter} character={character}/>
                        ))}
                    </section>
                </section>
                <section className="Part">
                    <h4>Ability Points: {ASP}</h4>
                </section>
            </section>
        </div>
    );
}

