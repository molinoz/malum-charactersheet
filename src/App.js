import './App.css';
import { useState, useEffect } from "react";

import Navbar from './components/menu/Navbar';
import FileSet from './components/menu/FileSet';

import MalumCharactersheet from './Content/Systems/Malum/characterSheet/MalumCharactersheet';

export default function App() {
  const [character, setCharacter] = useState({info:{file: "None"}, name2: "bob"})
    const updateCharacter = (newState) => {
      setCharacter(newState);
    };
    useEffect(() => {
      console.log("character updated is: ", character)
    }, [character]);
  return (
    <>
      <Navbar character={character}/>
      <MalumCharactersheet character={character} updateCharacter={updateCharacter}/>
      <FileSet updateCharacter={updateCharacter}/>
    </>
  );
}