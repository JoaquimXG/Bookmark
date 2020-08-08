//External Imports
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

//Custom components
import AppBar from "./components/AppBar";
import ItemList from "./components/ItemList";
import DataScreen from "./components/DataScreen";
import CompanyInfo from "./components/CompanyInfo";

//Incoming Data or templates
import staticRoutes from "./static/templates/staticRoutes";

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

const ItemDataScreenRoute = route => {
    return (
        <Route
            exact
            key={route}
            path={`/${route}s/:id`}
            render={routerProps => <DataScreen {...routerProps} path={route} />}
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
                    <AppBar />
                    <Switch>
                        <Route exact path="/" render={() => <CompanyInfo />} />
                        {staticRoutes.map(route => {
                            return ItemListRoute(route);
                        })}
                        {staticRoutes.map(route => {
                            return ItemDataScreenRoute(route);
                        })}
                    </Switch>
                </Router>
            </CssBaseline>
        </ApolloProvider>
    );
}
export default App;
