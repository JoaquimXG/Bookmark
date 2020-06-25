import React from "react";
import { CssBaseline } from "@material-ui/core";
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
import ItemData from "./components/ItemData";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    ["/credentials", credentialRows, credentialColumns],
    ["/Assets", assetRows, assetColumns],
    ["/locations", locationRows, locationColumns],
    ["/contacts", contactRows, contactColumns],
    ["/site summaries", siteSummaryRows, SiteSummaryColumns],
    ["/applications", applicationRows, applicationColumns],
    ["/backups", backupRows, backupColumns],
    ["/checklists", checklistRows, checklistColumns],
    ["/printers", printerRows, printerColumns]
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

const itemCategoryRoute = routeInfo => {
    const path = routeInfo[0];
    const rows = routeInfo[1];
    const columns = routeInfo[2];
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

const itemDataScreenRoute = (
    path,
    primaryCardCards,
    SecondaryCardData,
    buttonLayout
) => {
    return (
        <Route
            exact
            path={path}
            render={() => {
                return (
                    <ItemData buttons={buttonLayout} cards={primaryCardCards} />
                );
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
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <DataScreen
                                    primaryCardCards={
                                        companyInfoPrimaryCardData.cards
                                    }
                                    secondaryCardData={
                                        companyInfoSecondaryCardData
                                    }
                                    buttons={companyInfoButtons}
                                />
                            )}
                        />
                        {staticItemCategoryRoutes.map(routeInfo => {
                            return itemCategoryRoute(routeInfo);
                        })}
                    </Switch>
                </Router>
            </CssBaseline>
        </>
    );
}
export default App;
