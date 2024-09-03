import React from "react";
import { Link } from "react-router-dom";
import { pow } from "../baseSystem/pow";

export default function Navbar({character}) {
    if(character === null || character === undefined) return null;
    // return (
    //     <div>
    //         <button>Ham</button>
    //         <nav>
    //             <h3>{pow.check(character.info.file)}</h3>
    //             <ul>
    //                 <li><Link to="/turn-planner">Tracker</Link></li>
    //                 <li><Link to="/info">Info</Link></li>
    //                 <li><Link to="/attributes">Attributes</Link></li>
    //                 <li><Link to="/features">Features</Link></li>
    //                 <li><Link to="/inventory">Inventory</Link></li>
    //             </ul>
    //         </nav>
    //     </div>
    // )
    return (
        <>
            <button></button>
            <nav>
                <ul>
                    <li><Link to="/turn-planner"><img src="https://unpkg.com/pixelarticons@1.8.1/svg/archive.svg" width="30px"/></Link></li>
                    <li><Link to="/info"><img src="https://unpkg.com/pixelarticons@1.8.1/svg/contact.svg" width="30px"/></Link></li>
                    <li><Link to="/attributes"><img src="https://unpkg.com/pixelarticons@1.8.1/svg/dice.svg" width="30px"/></Link></li>
                </ul>
                <ul>
                    <li><Link to="/turn-planner">Tracker</Link></li>
                    <li><Link to="/attributes">Attributes</Link></li>
                </ul>
            </nav>
        </>
    )
}