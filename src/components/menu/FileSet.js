import React, { useState, useEffect } from "react";
import { Store } from "tauri-plugin-store-api";
import { readTextFile } from '@tauri-apps/api/fs';

import FileModal from "./FileModal";

export default function FileSet({updateCharacter}) {
    const [openModal, setOpenModal] = useState(true);
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

    return (
        <>
            <section>
                <button>Save</button>
                <button>New</button>
                <button>Load</button>
            </section>
            <FileModal active={openModal} store={store} updateCharacter={updateCharacter}/>
        </>
    )
}