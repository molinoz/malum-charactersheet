import React, { useState } from "react";
import { open } from '@tauri-apps/api/dialog';
import { createDir, writeFile } from '@tauri-apps/api/fs';

import { malum } from "../../../Content/Systems/Malum/malum";

export default function CreateCharDir({store}) {
    const [CharDir, SetCharDir] = useState('');
    const [name, setName] = useState('');

    const newCharDir = async () => {
        try {
            const storedDefaultDir = await store.get('defaultDir');
            console.log('Retrieved defaultDir:', storedDefaultDir);
            try {
                // Create the folder using the user-inputted name
                await createDir(`${storedDefaultDir}/${name}`);
                // Create a JSON file within the folder
                const charObj = malum.create.character(name);
                console.log(typeof charObj);
                await writeFile(`${storedDefaultDir}/${name}/${name}.json`, JSON.stringify(charObj));
                console.log('Folder and file created successfully');
                const selected = `${storedDefaultDir}/${name}`
                SetCharDir(selected);
                try {
                    await store.set('charDir', selected)
                    console.log('charDir saved successfully');
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
            <p>{CharDir}</p>
        </>
    )
}