import React, { useEffect, useState } from "react";

import SelectDefaultDir from "./FileSystem/SelectDefaultDir";
import SelectCharDir from "./FileSystem/SelectCharDir";
import CreateCharDir from "./FileSystem/CreateCharDir";

export default function FileModal({active, store, updateCharacter}) {
    const [CharDir, SetCharDir] = useState('');
    const updateCharDir = (newCharDir) => {
        SetCharDir(newCharDir);
    };
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
    if(!active) return null;
    return (
        <>
            <div className='overlay'>
                <div className='modalContainer'>
                    <SelectDefaultDir store={store}/>
                    <SelectCharDir store={store} updateCharacter={updateCharacter} updateCharDir={updateCharDir}/>
                    <CreateCharDir store={store} updateCharacter={updateCharacter} updateCharDir={updateCharDir}/>
                    <p>{CharDir}</p>
                </div>
            </div>
        </>
    )
}