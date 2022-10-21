import React from 'react'

type Prototypes = {
    children: JSX.Element | JSX.Element[]
}

export function ListWrap({children}: Prototypes){

    return(
        <ul>
            {children}
        </ul>
    )   

}