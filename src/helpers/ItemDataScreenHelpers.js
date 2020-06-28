import React from 'react';
import { assetTemplate } from "../static/pre-api-helpers/testingCardGeneration";
import DataScreen from '../components/DataScreen';
import {Route} from 'react-router-dom';
import {
    companyInfoSecondaryCardData,
    companyInfoButtons
} from "../static/pre-api-helpers/companyInfoApiData";

export const generatePrimaryCards = (item, template) => {
    var newItem = {
        cards: template.cards.map(card => {
            var content = card.content.map(templateValue => {
                return item[templateValue]
                    ? { title: templateValue, content: item[templateValue] }
                    : null;
            });
            return content ? { ...card, content: content } : null;
        })
    };
    newItem.header = item[template.header];
    return newItem;
};

export const renderDataScreen = (routerProps, rows)=> {
    let id = parseInt(routerProps.match.params.id);
    
    // if the page is refreshed then there will be no value in rows
    if (rows === null){
        //TO-DO getRows
        console.log('rows undefined, page probably refreshed')
    }
    
    console.log('rows', rows)

    var item = rows.find(row => row.id === id);
    item = generatePrimaryCards(item, assetTemplate);
    return (
        <DataScreen
            buttons={companyInfoButtons}
            cards={item.cards}
            title={item.header}
            secondaryCardData={companyInfoSecondaryCardData}
        />
    );
};

export const itemDataScreenRoute = (routeInfo, rows)=> {
    return (
        <Route
            exact
            key={routeInfo.path}
            path={`${routeInfo.path}/:id`}
            render={(routerProps) => renderDataScreen(routerProps, rows)}
        />
    );
};
