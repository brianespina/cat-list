import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import db from '../firebase'

export const AddItem = () => {

    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')

    const handleClick = async () => {
        
        try {
            const docRef = await addDoc(collection(db, "resource"), {
                title: title,
                link: link
            })
            console.log(docRef)
        } catch (error) {
            console.log("error adding document", error)
        }
    }

    return(
        <>
            <input type="text" value={title} onChange={e => {setTitle(e.target.value)}}/>
            <input type="text" value={link} onChange={e => {setLink(e.target.value)}} />
            <button disabled={!Boolean(title)} onClick={handleClick}>Add</button>
        </>
    )
}