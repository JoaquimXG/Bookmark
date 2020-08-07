import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";
import dataScreenStaticTemplates from "./static/pre-api-helpers/dataScreenStaticTemplates";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    {
        path: "credential",
    },
    {
        path: "asset",
    },
    {
        path: "location",
    },
    {
        path: "contact",
    },
    {
        path: "backup",
    },
    {
        path: "sitesummary",
    },
    {
        path: "application",
    },
    {
        path: "checklist",
    },
    {
        path: "printer",
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

const ItemListRoute = (route) => {
    return (
        <Route
            exact
            key={route.path}
            path={`/${route.path}s`}
            render={() => {
                return (
                    <ItemList
                        path={route.path}
                    />
                );
            }}
        />
    );
};

const itemDataScreenRoute = (route) => {
    return (
        <Route
            exact
            key={route.path}
            path={`/${route.path}s/:id`}
            render={routerProps => (
                <DataScreen
                    {...routerProps}
                    path={route.path}
                    buttons={dataScreenStaticTemplates.buttons}
                    secondaryCardData={dataScreenStaticTemplates.secondaryCardData}
                />
            )}
        />
    );
};

const client = new ApolloClient({
    uri: "http://lvh.me:4000/graphql",
    cache: new InMemoryCache()
});

function App() {
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
                                    home
                                    path="credential"
                                    cards={companyInfoPrimaryCardData.cards}
                                    secondaryCardData={
                                        companyInfoSecondaryCardData
                                    }
                                    buttons={companyInfoButtons}
                                    header={{title:"Company Info", disabled: false}}
                                />
                            )}
                        />
                        {staticItemCategoryRoutes.map(route => {
                            return ItemListRoute(route);
                        })}
                        {staticItemCategoryRoutes.map(route => {
                            return itemDataScreenRoute(route);
                        })}
                    </Switch>
                </Router>
            </CssBaseline>
        </ApolloProvider>
    );
}
export default App;
