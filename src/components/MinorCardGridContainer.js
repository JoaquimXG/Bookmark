//External Imports
import React from "react";
import { Grid } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import MinorCard from "./MinorCard";

export default props => {
    const classes = myStyles();

    return (
        <Grid
            container
            className={`${classes.padding3} ${classes.primaryOverflow}`}
            spacing={3}
        >
            {props.cards.map((card, index) => {
                return card.content.every(
                    subtitle => !props.formValues[subtitle.title]
                ) && !props.edit ? null : (
                    <MinorCard
                        key={index}
                        xs={card.columns.xs}
                        formValues={props.formValues}
                        handleTextFieldChange={props.handleTextFieldChange}
                        submitted={props.submitted}
                        edit={props.edit}
                        title={card.title}
                        content={card.content}
                    ></MinorCard>
                );
            })}
        </Grid>
    );
};
