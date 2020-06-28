import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemCategory from "./components/ItemCategory";
import {
    credentialColumns,
    assetColumns,
    locationColumns,
    contactColumns,
    SiteSummaryColumns,
    applicationColumns,
    backupColumns,
    checklistColumns,
    printerColumns,
    rows
} from "./static/pre-api-helpers/itemlists";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";
import { assetTemplate } from "./static/pre-api-helpers/testingCardGeneration";
import assetsDump from "./static/pre-api-helpers/assetDump";

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    {
        path: "/credentials",
        rows: rows.credentials,
        columns: credentialColumns
    },
    {
        path: "/assets",
        rows: assetsDump,
        columns: assetColumns,
        assetTemplate
    },
    { path: "/locations", rows: rows.locations, columns: locationColumns },
    { path: "/contacts", rows: rows.contacts, columns: contactColumns },
    {
        path: "/site summaries",
        rows: rows.siteSummarys,
        columns: SiteSummaryColumns
    },
    {
        path: "/applications",
        rows: rows.applications,
        columns: applicationColumns
    },
    { path: "/backups", rows: rows.backups, columns: backupColumns },
    { path: "/checklists", rows: rows.checklists, columns: checklistColumns },
    { path: "/printers", rows: rows.printers, columns: printerColumns }
];

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

const ItemCategoryRoute = (route, setRows) => {
    return (
        <Route
            exact
            key={route.path}
            path={route.path}
            render={() => {
                return (
                    <ItemCategory
                        setRows={setRows}
                        path={route.path}
                        rows={route.rows}
                        colums={route.columns}
                    />
                );
            }}
        />
    );
};

const itemDataScreenRoute = (routeInfo, rows)=> {
    return (
        <Route
            exact
            key={routeInfo.path}
            path={`${routeInfo.path}/:id`}
            render={(routerProps) => (<DataScreen 
                {...routerProps}
                rows={rows}
                buttons={companyInfoButtons}
                secondaryCardData={companyInfoSecondaryCardData}
            />)}

        />
    );
};

function App() {
    const [rows, setRows] = useState(null);
    console.log("rows", rows);

    return (
        <>
            <CssBaseline>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <DataScreen
                                    cards={companyInfoPrimaryCardData.cards}
                                    secondaryCardData={
                                        companyInfoSecondaryCardData
                                    }
                                    buttons={companyInfoButtons}
                                    title="Company Info"
                                />
                            )}
                        />
                        {staticItemCategoryRoutes.map(route => {
                            return ItemCategoryRoute(route, setRows);
                        })}
                        {staticItemCategoryRoutes.map(route => {
                            return itemDataScreenRoute(route, rows);
                        })}
                    </Switch>
                </Router>
            </CssBaseline>
        </>
    );
}
export default App;
