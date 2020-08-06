import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemCategory from "./components/ItemCategory";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";
import itemDataScreenTemplate from "./static/pre-api-helpers/itemDataScreenTemplate";
import templates from "./static/pre-api-helpers/cardGenerationTemplates";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

//Static routes for Item Categories
const staticItemCategoryRoutes = [
    {
        path: "credential",
        template: templates.credentialTemplate,
    },
    {
        path: "asset",
        template: templates.assetTemplate,
    },
    {
        path: "location",
        template: templates.locationTemplate,
    },
    {
        path: "contact",
        template: templates.contactTemplate,
    },
    {
        path: "backup",
        template: templates.backupTemplate,
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

const ItemCategoryRoute = (route) => {
    return (
        <Route
            exact
            key={route.path}
            path={`/${route.path}s`}
            render={() => {
                return (
                    <ItemCategory
                        path={route.path}
                        query={route.query}
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
                    buttons={itemDataScreenTemplate.buttons}
                    secondaryCardData={itemDataScreenTemplate.secondaryCardData}
                    rowTemplate={route.template}
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
                            return ItemCategoryRoute(route);
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
