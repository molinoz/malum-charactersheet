import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({character}) {
    return (
        <div>
            <button>Ham</button>
            <nav>
                <h3>{character.main.name}</h3>
                <ul>
                    <li><Link to="/info">Info</Link></li>
                    <li><Link to="/attributes">Attributes</Link></li>
                    <li><Link to="/turn-planner">Turn Planner</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/spell-list">Spell List</Link></li>
                </ul>
            </nav>
        </div>
    )
}