import React, { useEffect, useState } from "react";

import SelectDefaultDir from "./FileSystem/SelectDefaultDir";
import SelectCharDir from "./FileSystem/SelectCharDir";
import CreateCharDir from "./FileSystem/CreateCharDir";

export default function FileModal({active, mode, onClose, store, updateCharacter}) {
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
            <div onClick={onClose} className='overlay'>
                <div
                    onClick={(e) => {
                    e.stopPropagation();
                    }}
                    className='modalContainer'
                >
                    <div className='modalRight'>
                        <div>
                            <SelectDefaultDir store={store}/>
                            <SelectCharDir mode={mode} store={store} updateCharacter={updateCharacter} updateCharDir={updateCharDir}/>
                            <CreateCharDir mode={mode} store={store} updateCharacter={updateCharacter} updateCharDir={updateCharDir}/>
                            <p>{CharDir}</p>
                        </div>
                        <p className='closeBtn' onClick={onClose}>
                            X
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}