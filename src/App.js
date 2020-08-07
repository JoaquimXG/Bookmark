//External Imports
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

//Custom components
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import DataScreen from "./components/DataScreen";

//Incoming Data or templates
import companyInfo from "./static/pre-api-helpers/companyInfoApiData";
import dataScreenStaticTemplates from "./static/pre-api-helpers/dataScreenStaticTemplates";

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    "credential",
    "asset",
    "location",
    "contact",
    "backup",
    "sitesummary",
    "application",
    "checklist",
    "printer"
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

const ItemListRoute = route => {
    return (
        <Route
            exact
            key={route}
            path={`/${route}s`}
            render={() => {
                return <ItemList path={route} />;
            }}
        />
    );
};

const itemDataScreenRoute = route => {
    return (
        <Route
            exact
            key={route}
            path={`/${route}s/:id`}
            render={routerProps => (
                <DataScreen
                    {...routerProps}
                    path={route}
                    buttons={dataScreenStaticTemplates.buttons}
                    secondaryCardData={
                        dataScreenStaticTemplates.secondaryCardData
                    }
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
                                    cards={companyInfo.primaryCard.cards}
                                    secondaryCardData={
                                        companyInfo.secondaryCardData
                                    }
                                    buttons={companyInfo.buttons}
                                    header={{
                                        title: "Company Info",
                                        disabled: false
                                    }}
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
