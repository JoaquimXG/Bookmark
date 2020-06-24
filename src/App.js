import React from "react";
import { CssBaseline } from "@material-ui/core";
import CompanyInfo from "./components/CompanyInfo";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemCategory from "./components/ItemCategory";
import {
    credentialRows,
    credentialColumns,
    assetRows,
    assetColumns,
    locationRows,
    locationColumns,
    contactRows,
    contactColumns,
    siteSummaryRows,
    SiteSummaryColumns,
    applicationRows,
    applicationColumns,
    backupRows,
    backupColumns,
    checklistRows,
    checklistColumns,
    printerRows,
    printerColumns
} from "./static/pre-api-helpers/itemlists";

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
export const AppBarHeight = {
    xs: 72,
    sm: 80
};

const itemCategoryRoute = (path, rows, columns) => {
    return (
        <Route
            exact
            path={path}
            render={() => {
                return <ItemCategory rows={rows} colums={columns} />;
            }}
        />
    );
};

function App() {
    return (
        <>
            <CssBaseline>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={CompanyInfo} />
                        {itemCategoryRoute('/credentials',credentialRows, credentialColumns)}
                        {itemCategoryRoute('/Assets',assetRows, assetColumns)}
                        {itemCategoryRoute('/locations',locationRows, locationColumns)}
                        {itemCategoryRoute('/contacts', contactRows, contactColumns)}
                        {itemCategoryRoute('/site summaries', siteSummaryRows, SiteSummaryColumns)}
                        {itemCategoryRoute('/applications', applicationRows, applicationColumns)}
                        {itemCategoryRoute('/backups', backupRows, backupColumns)}
                        {itemCategoryRoute('/checklists', checklistRows, checklistColumns)}
                        {itemCategoryRoute('/printers', printerRows, printerColumns)}
                    </Switch>
                </Router>
            </CssBaseline>
        </>
    );
}

export default App;
