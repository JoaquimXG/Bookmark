import React from "react";
import { Home } from "./components";
import {CssBaseline} from "@material-ui/core";

//Colors
export const themeColors = {
    primary6: "#546e7a",
    primary5: "#263238",
    primary3: "#90A4AE",

    secondary5: "#0D24A8"

};

//Navigation drawer width
export const drawerWidth = 250;

function App() {
    return (
        <>
            <CssBaseline>
                <Home />
            </CssBaseline>
        </>
    );
}

export default App;
