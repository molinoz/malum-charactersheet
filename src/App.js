import './App.css';
import { useState } from "react";

import Navbar from './components/menu/Navbar';
import FileSet from './components/menu/FileSet';

import MalumCharactersheet from './Content/Systems/Malum/characterSheet/MalumCharactersheet';

export default function App() {
  const [character, setCharacter] = useState({main:{name: "Larry"}, name2: "bob"})
    
    const updateCharacter = (newState) => {
        setCharacter(newState);
    };
  return (
    <>
      <Navbar character={character}/>
      <MalumCharactersheet character={character} updateCharacter={updateCharacter}/>
      <FileSet character={character} updateCharacter={updateCharacter}/>
    </>
  );
}