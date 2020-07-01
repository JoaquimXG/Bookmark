import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemCategory from "./components/ItemCategory";
import { rows, columns } from "./static/pre-api-helpers/itemlists";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";
import itemDataScreenTemplate from "./static/pre-api-helpers/itemDataScreenTemplate";
import templates from "./static/pre-api-helpers/cardGenerationTemplates";
import apiDumps from "./static/pre-api-helpers/apiDumps";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    {
        path: "/credentials",
        rows: apiDumps.credentials,
        columns: columns.credentialColumns,
        template: templates.credentialTemplate,
        query: "credentialsList"
    },
    {
        path: "/assets",
        rows: apiDumps.assets,
        columns: columns.assetColumns,
        template: templates.assetTemplate,
        query: "assetsList"
    },
    {
        path: "/locations",
        rows: apiDumps.locations,
        columns: columns.locationColumns,
        template: templates.locationTemplate,
        query: "locationsList"
    },
    {
        path: "/contacts",
        rows: apiDumps.contacts,
        columns: columns.contactColumns,
        template: templates.contactTemplate,
        query: "contactsList"
    },
    {
        path: "/backups",
        rows: apiDumps.backups,
        columns: columns.backupColumns,
        templates: templates.backupTemplate,
        query: "backupsList"
    },
    {
        path: "/site summaries",
        rows: rows.siteSummarys,
        columns: columns.siteSummaryColumns,
        query: "siteSummariesList"
    },
    {
        path: "/applications",
        rows: rows.applications,
        columns: columns.applicationColumns,
        query: "applicationsList"
    },
    {
        path: "/checklists",
        rows: rows.checklists,
        columns: columns.checklistColumns,
        query: "checklistsList"
    },
    {
        path: "/printers",
        rows: rows.printers,
        columns: columns.printerColumns,
        query: "printersList"
    }
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
                        query={route.query}
                        colums={route.columns}
                    />
                );
            }}
        />
    );
};

const itemDataScreenRoute = (routeInfo, rows) => {
    return (
        <Route
            exact
            key={routeInfo.path}
            path={`${routeInfo.path}/:id`}
            render={routerProps => (
                <DataScreen
                    {...routerProps}
                    rows={rows}
                    buttons={itemDataScreenTemplate.buttons}
                    secondaryCardData={itemDataScreenTemplate.secondaryCardData}
                    rowTemplate={routeInfo.template}
                />
            )}
        />
    );
};

const client = new ApolloClient({
    uri: "http://lvh.me:4000"
});

function App() {
    const [rows, setRows] = useState(null);

    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}
export default App;
