import React from "react";
const { app, dialog } = require('@tauri-apps/api');

export default function FileSet() {
    const chooseOrCreateDirectory = async () => {
        const result = await dialog.open({
          defaultPath: app.getPath('desktop'),
          properties: ['openDirectory', 'createDirectory'],
        });
      
        if (result.canceled) {
          console.log('Directory selection canceled');
          return;
        }
      
        const directoryPath = result.filePaths[0];
        console.log('Selected directory:', directoryPath);
    };
    return (
        <>
        <section>
            <button>Save</button>
            <button>Export</button>
            <button>New</button>
            <button>Load</button>
        </section>
        </>
    )
}