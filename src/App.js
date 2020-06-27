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
import assets from "./static/pre-api-helpers/assetDump";
import DataScreen from "./components/DataScreen";
import {
    companyInfoPrimaryCardData,
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "./static/pre-api-helpers/companyInfoApiData";
import { assetsTemplate } from "./static/pre-api-helpers/testingCardGeneration";

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

const generatePrimaryCards = (item, template) => {
    var newItem = {
        cards: template.cards.map(card => {
            var content = card.content.map(templateValue => {
                console.log('templateValue',templateValue, 'item[templateValue]', item[templateValue])
                return item[templateValue]
                    ? { title: templateValue, content: item[templateValue] }
                    : null;
            });
            console.log('card.content', content)
            return content ? { ...card, content: content } : null;
        })
    };
    newItem.header = item[template.header];
    return newItem;
};

const renderDataScreen = routerProps => {
    let id = parseInt(routerProps.match.params.id);

    var item = assets.find(asset => asset.id === id);
    item = generatePrimaryCards(item, assetsTemplate);
    console.log(item);
    return (
        <DataScreen
            buttons={companyInfoButtons}
            cards={item.cards}
            title={item.header}
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
        <Route
            exact
            key={routeInfo.path}
            path={`${routeInfo.path}/:id`}
            render={renderDataScreen}
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
                                    cards={
                                        companyInfoPrimaryCardData.cards
                                    }
                                    secondaryCardData={
                                        companyInfoSecondaryCardData
                                    }
                                    buttons={companyInfoButtons}
                                    title="Company Info"
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
