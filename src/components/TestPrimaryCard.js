import React from "react";
import { Paper } from "@material-ui/core";
import { myStyles } from "../static/css/style";
import TestMinorCard from "./TestMinorCard";
import ButtonRow from "./ButtonRow";
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

export default props => {
    const classes = myStyles();
    const test = true;
    console.log(props.cards)
    return (
        <Paper className={classes.itemList} elevation={8}>
            <h1>PrimaryCard</h1>
            <ButtonRow
                buttons={dataScreenStaticTemplates.buttons.primary}
                buttonFunctions={props.buttonFunctions}
                edit={props.formState.edit}
            />
            {props.cards.map((card, index) => {
                return (
                    <TestMinorCard
                        formState={props.formState}
                        card={card}
                        key={index}
                    />
                );
            })}
        </Paper>
    );
};
