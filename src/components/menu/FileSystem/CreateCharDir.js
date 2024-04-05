import React, { useState, useEffect } from "react";
import { createDir, readDir, writeFile, readTextFile } from '@tauri-apps/api/fs';

import { malum } from "../../../Content/Systems/Malum/malum";

export default function CreateCharDir({store, updateCharacter, updateCharDir}) {
    const [CharDir, SetCharDir] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        const fetchCharDir = async () => {
          try {
            const storedCharDir = await store.get('charDir');
            if (storedCharDir) {
              SetCharDir(storedCharDir);
            }
          } catch (error) {
            console.error('Error retrieving charDir:', error);
          }
        };
        fetchCharDir();
      }, []);
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

    const newCharDir = async () => {
        try {
            const storedDefaultDir = await store.get('defaultDir');
            console.log('Retrieved defaultDir:', storedDefaultDir);
            try {
                // Create the folder using the user-inputted name
                await createDir(`${storedDefaultDir}/${name}`);
                // Create a JSON file within the folder
                let path = `${storedDefaultDir}/${name}/charData.json`;
                await writeFile(path, JSON.stringify(malum.make.character(name)));
                console.log('Folder and file created successfully');
                const selected = `${storedDefaultDir}/${name}`;
                updateCharDir(selected);
                try {
                    await store.set('charDir', selected)
                    console.log('charDir saved successfully');
                    getData(path);
                } catch (error) {
                    console.error('Error saving charDir:', error);
                };
            } catch (error) {
                console.error('Error creating folder and file:', error);
              }
        } catch (error) {
          console.error('Error retrieving defaultDir:', error);
        }
    };
    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={newCharDir}>Create Character Folder</button>
        </>
    )
}