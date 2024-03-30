import React,{ useState, useEffect } from 'react';
import { open } from '@tauri-apps/api/dialog';

export default function SelectDefaultDir({store}) {
    const [defaultDir, setDefaultDir] = useState('');
    useEffect(() => {
        const fetchDefaultDir = async () => {
          try {
            const storedDefaultDir = await store.get('defaultDir');
            if (storedDefaultDir) {
              setDefaultDir(storedDefaultDir);
            }
          } catch (error) {
            console.error('Error retrieving defaultDir:', error);
          }
        };
        fetchDefaultDir();
      }, []);
    const selectDirectory = async () => {
        const selected = await open({
            directory: true,
            multiple: false,
        });
        try {
            await store.set('defaultDir', selected)
            console.log('defaultDir saved successfully');
            try {
                const storedDefaultDir = await store.get('defaultDir');
                console.log('Retrieved defaultDir:', storedDefaultDir);
                setDefaultDir(storedDefaultDir);
            } catch (error) {
              console.error('Error retrieving defaultDir:', error);
            }
        } catch (error) {
                console.error('Error saving defaultDir:', error);
        };
    };

    return (
        <>
            <button onClick={selectDirectory}>Set Default Directory</button>
            <p>{defaultDir}</p>
        </>
    );
}
