import React, {useEffect, useState} from "react";
import AppTitle from "./AppTitle";
import ListItem from "./ListItem";
import { ListWrap } from "./ListWrap";
import { AddItem } from "./AddItem";
import {collection, getDocs} from 'firebase/firestore'
import db from '../firebase'

const App = () => {

    const [items, setItems] = useState({})

    const fetchItems = async () => {
        try{
            const snapshot = await getDocs(collection(db, 'resource'))
            
            console.log(snapshot)
        }catch(e){
            console.error(e);
        }
       
    }

    useEffect(()=>{
        fetchItems()
    }, [])

    return (
        <div>
            <AppTitle>Category Listing</AppTitle>
            <ListWrap>
                <ListItem>
                    list item
                </ListItem>
            </ListWrap>      

            <AddItem />   
        </div>
    )
}

export default App
