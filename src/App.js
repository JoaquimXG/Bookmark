import React from "react";
import {CssBaseline} from "@material-ui/core";
import CompanyInfo from "./components/CompanyInfo";
import NavBar from "./components/NavBar";
import './static/css/App.css'
import {BrowserRouter as Router, Switch, Route, useRouteMatch, useLocation} from "react-router-dom";

//Colors
export const themeColors = {
    primary6: "#546e7a",
    primary5: "#263238",
    primary3: "#90A4AE",

    secondary5: "#0D24A8",

    success: "#27AE60",

    error: "#FF0C3E"
};

//Navigation drawer width
export const drawerWidth = 250;


function App() {

    return (
        <>
            <CssBaseline>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={CompanyInfo} />
                    </Switch>
                </Router>
            </CssBaseline>
        </>
    );
}

export default App;
