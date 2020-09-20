//External Imports
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

//Custom components
import AppBar from "./components/AppBar";
import ItemList from "./components/ItemList";
import DataScreen from "./components/DataScreen";
import NewDataScreen from "./components/NewDataScreen";
import CompanyInfo from "./components/CompanyInfo";

//Incoming Data or templates
import staticRoutes from "./static/templates/staticRoutes";

//Style
import { myStyles } from "./static/css/style";

const ItemListRoute = route => {
    return (
        <Route
            exact
            key={route}
            path={`/companies/:site_id/${route}s`}
            render={routerProps => {
                return <ItemList {...routerProps} path={route} />;
            }}
        />
    );
};

const ItemDataScreenRoute = route => {
    return (
        <Route
            exact
            key={route}
            path={`/companies/:site_id/${route}s/:id`}
            render={routerProps => <DataScreen {...routerProps} path={route} />}
        />
    );
};

const NewItemRoute = route => {
    return (
        <Route
            exact
            key={route}
            path={`/companies/:site_id/new${route}`}
            render={routerProps => (
                <NewDataScreen {...routerProps} path={route} />
            )}
        />
    );
};

const client = new ApolloClient({
    uri: "http://lvh.me:4000/graphql",
    cache: new InMemoryCache()
});

function App() {
    const classes = myStyles();

    return (
        <ApolloProvider client={client}>
            <CssBaseline>
                <AppBar companyInfo />
                <div className={classes.mainWindow}>
                    <Switch>
                        <Route
                            exact
                            path="/companies/:site_id/"
                            render={routerProps => {
                                return <CompanyInfo {...routerProps} />;
                            }}
                        />
                        {staticRoutes.map(route => {
                            return NewItemRoute(route);
                        })}
                        {staticRoutes.map(route => {
                            return ItemListRoute(route);
                        })}
                        {staticRoutes.map(route => {
                            return ItemDataScreenRoute(route);
                        })}
                    </Switch>
                </div>
            </CssBaseline>
        </ApolloProvider>
    );
}
export default App;
