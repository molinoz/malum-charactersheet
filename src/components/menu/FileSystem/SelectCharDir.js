import React,{useState, useEffect} from 'react';
import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';

export default function SelectCharDir({store, updateCharacter, updateCharDir}) {
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
      updateCharDir(selected);
      try {
        await store.set('charDir', selected)
        console.log('charDir saved successfully');
        let path = `${selected}/charData.json`;
        console.log('charData:',path);
        getData(path);
      } catch (error) {
        console.error('Error saving charDir:', error);
      };
    } catch (error) {
      console.error('Error retrieving defaultDir:', error);
    }
  };
  return (
      <div>
        <button onClick={chooseCharDir}>Select Character Folder</button>
      </div>
  )
}