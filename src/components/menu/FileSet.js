import React, { useState } from "react";
import { Store } from "tauri-plugin-store-api";

import FileModal from "./FileModal";

export default function FileSet({updateCharacter}) {
    const [openModal, setopenModal] = useState(true);

    const store = new Store("store.json");

    const saveChar = async () => {
        // in the defaultDir, save the character writing over the json file
    };

    return (
        <>
            <section>
                <button>Save</button>
                <button>New</button>
                <button>Load</button>
            </section>
            <FileModal active={openModal} store={store}/>
        </>
    )
}