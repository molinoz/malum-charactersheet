import React from "react";
import Container from "./Container.js";
import Input from "./Input.js";
import Tracker from "./Tracker.js";
import Upload from "./Upload.js";
import Selection from "./Selection.js"
import Render from "./Render.js";

export default function infoBlock(data) {
    switch(data.type) {
        case 'container': 
            return(
                <Container data={data}/>
            )
        case 'input': 
            return(
                <Input data={data}/>
            )
        case 'tracker': 
            return(
                <Tracker data={data}/>
            )
        case 'upload': 
            return(
                <Upload data={data}/>
            )
        case 'selection': 
            return(
                <Selection data={data}/>
            )
        case 'render': 
            return(
                <Render data={data}/>
            )
    }
}