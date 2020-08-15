//External Imports
import React from "react";
import { Grid } from "@material-ui/core";

//Style
import { myStyles } from "../static/css/style";

//Custom Components
import MinorCard from "./MinorCard";

//    //Filters the formValues being passed down so that each
//    //MinorCard component only recieves the formValues relevant to it
//    //This will hopefully allow for efficient rendering
//    const filterFormValues = (content, formValues) => {
//        var newFormValues = {};
//        for (let key in formValues) {
//            if (content.map(content => content.title).includes(key)) {
//                newFormValues[key] = formValues[key];
//            }
//        }
//        return newFormValues;
//    };

export default props => {
    const classes = myStyles();

    return (
        <Grid
            container
            className={`${classes.padding3} ${classes.primaryOverflow}`}
            spacing={3}
        >
            {props.cards.map((card, index) => {
                return card.fields.every(
                    field => field.fieldValue === ""
                ) && !props.edit ? null : (
                    <MinorCard
                        key={index}
                        formState={props.formState}
                        card={card}
                    ></MinorCard>
                );
            })}
        </Grid>
    );
};
