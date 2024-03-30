import React,{useState, useEffect} from 'react';
import { open } from '@tauri-apps/api/dialog';

import SelectDefaultDir from './SelectDefaultDir';

export default function SelectCharDir({store}) {
    const [CharDir, SetCharDir] = useState('');
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
    const chooseCharDir = async () => {
        try {
            const storedDefaultDir = await store.get('defaultDir');
            console.log('Retrieved defaultDir:', storedDefaultDir);
            const selected = await open({
                directory: true,
                multiple: false,
                defaultPath: storedDefaultDir,
            });
            console.log(selected);
            SetCharDir(selected);
            try {
                await store.set('charDir', selected)
                console.log('charDir saved successfully');
            } catch (error) {
                console.error('Error saving charDir:', error);
            };
        } catch (error) {
          console.error('Error retrieving defaultDir:', error);
        }
    };
    const readCharDir = async () => {
      // in the defaultDir, read the character folder
  }
    return (
        <>
          <button onClick={chooseCharDir}>Select Character Folder</button>
          <p>{CharDir}</p>
        </>
    )
}