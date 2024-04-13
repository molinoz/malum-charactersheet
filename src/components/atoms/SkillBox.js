import React from "react";
import '../Styles/mystyle.css';
import { useState } from "react";

export default function SkillBox({character, updateCharacter, ...props}) {

    return(
        <div className="Box skill">
            <section className="outline">
                <div className="training">drop down</div>
            </section>
            <section className="outline length1">
                <p>{props.baseMod}</p>
            </section>
            <section className="outline length2">
                <p>{props.name}</p>
            </section>
            <section className="outline">
                <p>BonusMod</p>
            </section>
        </div>
    )
}