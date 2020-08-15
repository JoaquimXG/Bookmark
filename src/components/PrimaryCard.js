//External Imports
import React from "react";
import { Paper, Divider } from "@material-ui/core";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Custom components
import MyMessage from "./MyMessage";
import PrimaryCardHeader from "./PrimaryCardHeader";
import MinorCardGridContainer from "./MinorCardGridContainer";

//Templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";

//Functions
import myMutation from "../static/functions/myMutation";

//Style
import { myStyles } from "../static/css/style";

//Mutations
import mutations from "../static/apollo/mutations";

//    const [deleteItem] = useMutation(mutations[props.path].delete, {
//        update: (cache, { data }) => {
//            //the data object contains a key matching the name of the mutation that was performed
//            //the mutation performed will be in this case delete+the name of the path/item currently displayed
//            //I have stored this name in the mutation object that is imported
//            var id = data[mutations[props.path].deleteStringIdentifier];
//            cache.modify({
//                fields: {
//                    //similar to the above, the function that needs to be called matches the name
//                    //of the query that we are updating, in this case that will be the plural item name/path
//                    [`${props.path}s`](existingRefs, { readField }) {
//                        //return the whole array of refs unless the referred object's id
//                        //matches the id returned from the "delete" mutation
//                        return existingRefs.filter(
//                            ref => id !== readField("id", ref)
//                        );
//                    }
//                }
//            });
//        }
//    });

//    const handleBadFormSubmit = error => {
//        console.log(error);
//        setMessage({
//            text: "Please Fill Required Fields",
//            display: true
//        });
//        setSubmitted(true);
//        setTimeout(() => {
//            setMessage(message => ({ ...message, display: false }));
//        }, 2000);
//    };

//    //when set, an error box will be displayed with the given message
//    const [message, setMessage] = useState({});
            //<MyMessage message={message} />

export default props => {
    const classes = myStyles();
    const history = useHistory();

    return (
        <Paper className={classes.itemList} elevation={8}>
            <PrimaryCardHeader
                buttonFunctions={props.buttonFunctions}
                header={props.header}
                buttons={dataScreenStaticTemplates.buttons.primary}
                edit={props.formState.edit}
            />
            <Divider />
            <MinorCardGridContainer
                cards={props.cards}
                formState={props.formState}
            />
        </Paper>
    );
};
