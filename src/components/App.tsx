import React from "react";
import AppTitle from "./AppTitle";
import ListItem from "./ListItem";
import { ListWrap } from "./ListWrap";

const App = () => {
    return (
        <div>
            <AppTitle>Hello World</AppTitle>
            <ListWrap>
                <ListItem>
                    Testing template
                </ListItem>
                <ListItem>
                    Testing template
                </ListItem>
                <ListItem>
                    Testing template
                </ListItem>
                <ListItem>
                    Testing template
                </ListItem>
            </ListWrap>
            
        </div>
    )
}

export default App
