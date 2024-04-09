import './App.css';
import { useState, useEffect } from "react";

import Navbar from './components/menu/Navbar';
import FileSet from './components/menu/FileSet';

import MalumCharactersheet from './Content/Systems/Malum/characterSheet/MalumCharactersheet';

export default function App() {
  const [character, setCharacter] = useState(undefined);
    const updateCharacter = (newState) => {
      setCharacter(newState);
    };
    useEffect(() => {
      console.log("character updated: ", character)
    }, [character]);
  return (
    <>
      <Navbar character={character}/>
      <MalumCharactersheet character={character} updateCharacter={updateCharacter}/>
      <FileSet character={character} updateCharacter={updateCharacter}/>
    </>
  );
}