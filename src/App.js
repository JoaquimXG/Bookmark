import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
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
import assets from "./static/pre-api-helpers/assetDump";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    { path: "/credentials", rows: credentialRows, columns: credentialColumns },
    { path: "/assets", rows: assetRows, columns: assetColumns },
    { path: "/locations", rows: locationRows, columns: locationColumns },
    { path: "/contacts", rows: contactRows, columns: contactColumns },
    {
        path: "/site summaries",
        rows: siteSummaryRows,
        columns: SiteSummaryColumns
    },
    {
        path: "/applications",
        rows: applicationRows,
        columns: applicationColumns
    },
    { path: "/backups", rows: backupRows, columns: backupColumns },
    { path: "/checklists", rows: checklistRows, columns: checklistColumns },
    { path: "/printers", rows: printerRows, columns: printerColumns }
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

const generateAssetPrimaryCards = asset => {};

const renderDataScreen = routerProps => {
    let id = parseInt(routerProps.match.params.id);

    console.log(id);
    const asset = assets.find(asset => asset.id === id);
    console.log(asset);
    var cards = companyInfoPrimaryCardData.cards;
    cards.title = id;
    console.log(cards)
    return (
        <DataScreen
            buttons={companyInfoButtons}
            primaryCardCards={cards}
            secondaryCardData={companyInfoSecondaryCardData}
        />
    );
};

const itemCategoryRoute = route => {
    return (
        <Route
            exact
            key={route.path}
            path={route.path}
            render={() => {
                return (
                    <ItemCategory
                        path={route.path}
                        rows={route.rows}
                        colums={route.columns}
                    />
                );
            }}
        />
    );
};

const itemDataScreenRoute = routeInfo => {
    return (
        <Route exact path={`${routeInfo.path}/:id`} render={renderDataScreen} />
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
                        {staticItemCategoryRoutes.map(route => {
                            return itemCategoryRoute(route);
                        })}
                        {staticItemCategoryRoutes.map(route => {
                            return itemDataScreenRoute(route);
                        })}
                    </Switch>
                </Router>
            </CssBaseline>
        </>
    );
}
export default App;
