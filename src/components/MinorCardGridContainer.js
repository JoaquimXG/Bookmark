//External Imports
import React from "react";
import { Grid } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import MinorCard from "./MinorCard";

export default props => {
    const classes = myStyles();

    //Filters the formValues being passed down so that each
    //MinorCard component only recieves the formValues relevant to it
    //This will hopefully allow for efficient rendering
    const filterFormValues = (content, formValues) => {
        var newFormValues = {};
        for (let key in formValues) {
            if (content.map(content => content.title).includes(key)) {
                newFormValues[key] = formValues[key];
            }
        }
        return newFormValues;
    };

    console.log(props.cards)
    console.log(props.formValues)

    return (
        <Grid
            container
            className={`${classes.padding3} ${classes.primaryOverflow}`}
            spacing={3}
        >
            {props.cards.map((card, index) => {
                var formValues = filterFormValues(
                    card.content,
                    props.formValues
                );
                return card.content.every(
                    subtitle => !props.formValues[subtitle.title]
                ) && !props.edit ? null : (
                    <MinorCard
                        //TO-DO, remove index
                        index={index}
                        key={index}
                        xs={card.columns.xs}
                        formValues={formValues}
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
