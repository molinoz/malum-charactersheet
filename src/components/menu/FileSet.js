import React, { useState, useEffect } from "react";
import { Store } from "tauri-plugin-store-api";
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs';

import FileModal from "./FileModal";

export default function FileSet({character, updateCharacter}) {
    const [openModal, setOpenModal] = useState(false);
    const [mode, setMode] = useState(0);
    const [charPath, setCharPath] = useState(null);

    const store = new Store("store.json");
    async function readJsonFile(path) {
        try {
            const file = await readTextFile(path);
            return JSON.parse(file);
        } catch (error) {
            console.error('Error reading JSON file:', error);
            return null;
        }
    }
    async function getData(path) {
        const data = await readJsonFile(path).then(data => {
            if(data) {
            updateCharacter(data);
            }
        })
    }

    useEffect(() => {
        const fetchCharData = async () => {
          try {
            const storedCharDir = await store.get('charDir');
            console.log('Retrieved charDir:', storedCharDir);
            if (storedCharDir) {
                let path = `${storedCharDir}/charData.json`;
                setCharPath(path);
                console.log('charData:', path);
                console.log(typeof path);
            }
          } catch (error) {
            console.error('Error retrieving CharDir or Update:', error);
          }
        };
        fetchCharData();
    }, []);
    useEffect(() => {
        getData(charPath);
    },[charPath]);
    function clickHandler(val) {
        setOpenModal(true);
        setMode(val);
    };
    async function saveHandler() {
        const filePath = charPath;
        try {
            await writeTextFile({
            path: filePath,
            contents: JSON.stringify(character, null, 2) // Convert character object to JSON with proper formatting
            });
            console.log('Character saved successfully to charObj.json');
        } catch (error) {
            console.error('Error saving character to charObj.json:', error);
        }
    };

    return (
        <>
            <section>
                <button onClick={saveHandler}>Save</button>
                <button onClick={() => clickHandler(1)}>New</button>
                <button onClick={() => clickHandler(0)}>Load</button>
            </section>
            <FileModal active={openModal} mode={mode} onClose={() => setOpenModal(false)} store={store} updateCharacter={updateCharacter}/>
        </>
    )
}