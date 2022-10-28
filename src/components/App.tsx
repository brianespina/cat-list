import React, {useEffect} from "react";
import AppTitle from "./AppTitle";
import ListItem from "./ListItem";
import { ListWrap } from "./ListWrap";
import db from '../firebase'
import { addDoc, collection } from "firebase/firestore";

const App = () => {

    const addTodo = async () => {


        // try {
        //     const docRef = await addDoc(collection(db, "todo"), {
        //         todo: "test23"
        //     })
        //     console.log(docRef)
        // } catch (error) {
        //     console.log("error adding document", error)
        // }
    } 

    useEffect(()=>{
        addTodo()
    }, [])
    return (
        <div>
            <AppTitle>Category Listing</AppTitle>
            <ListWrap>
                <ListItem>
                    Testing template
                </ListItem>
            </ListWrap>
            
        </div>
    )
}

export default App
