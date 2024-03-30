import React from "react";

import SelectDefaultDir from "./FileSystem/SelectDefaultDir";
import SelectCharDir from "./FileSystem/SelectCharDir";
import CreateCharDir from "./FileSystem/CreateCharDir";

export default function FileModal({active, updateCharacter, store}) {
    if(!active) return null;
    return (
        <>
            <div className='overlay'>
                <div className='modalContainer'>
                    <SelectDefaultDir store={store}/>
                    <SelectCharDir store={store} updateCharacter={updateCharacter}/>
                    <CreateCharDir store={store} updateCharacter={updateCharacter}/>
                </div>
            </div>
        </>
    )
}