import React from "react";

export default function Container({data}){
    const {name, description, infoBlock, children} = data
    switch(data.form) {
        case 'default':
            return(
                <div>
                    {children}
                </div>
            )
        case 'button':
            return(
                <button>
                    {children}
                </button>
            )
        case 'card':
            return(
                <>
                    <details>
                        <summary>{name}</summary>
                        <p>{description}</p>
                        {children}
                    </details>
                </>
            )
        case 'section':
            return(
                <>
                    <section>
                        {children}
                    </section>
                </>
            )
        case 'inventory':
            return(
                <>
                    
                </>
            )
        case 'scroll':
            return(
                <>
                    
                </>
            )
        case 'page':
            return(
                <>

                </>
            )
        case 'booklet':
            return(
                <>
                    
                </>
            )
        default:
            return(
                <>
                    <h1>Container:</h1>
                    <p>ERROR</p>
                </>
            )
    }
}