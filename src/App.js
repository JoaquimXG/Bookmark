import React from "react";
import {CssBaseline} from "@material-ui/core";
import CompanyInfo from "./components/CompanyInfo";

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
                <CompanyInfo />
            </CssBaseline>
        </>
    );
}

export default App;
