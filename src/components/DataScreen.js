//External Imports
import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//Custom Components
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import DisplayMessageCard from "./DisplayMessageCard";

//Functions
import myMutation from "../static/functions/myMutation";
import generatePrimaryCards from "../static/functions/generatePrimaryCards";
import fillDataScreenTemplate from "../static/functions/fillDataScreenTemplate";

//Data, queries, mutations and templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";
import { individualQueries, itemListQueries } from "../static/apollo/queries";
import mutations from "../static/apollo/mutations";
import cardGenerationTemplates from "../static/templates/cardGenerationTemplates";

//Style
import { myStyles } from "../static/css/style";
import TestDisplay from "./TestDisplay";
import { useFormProvider } from "../hooks/useFormProvider";
import useMyMutation from "../hooks/useMyMutation";
import formConstraints from "../static/templates/formConstraints";

export default props => {
    var id = parseInt(props.match.params.id);
    var query = individualQueries[props.path].query;
    const constraints = formConstraints[props.path];

    const { loading, error, data } = useQuery(query, { variables: { id: id } });

    const {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setInvalidFields,
        invalidFields
    } = useFormProvider(
        id,
        props.path,
        data ? data[props.path] : null,
        constraints
    );

    const {
        Edit,
        New,
        Cancel,
        Delete,
        ...secondaryFunctions
    } = buttonFunctions;

    if (loading) return <DisplayMessageCard variant="loading" />;
    if (error) return <DisplayMessageCard variant="error" />;

    const { cards, header } = fillDataScreenTemplate(
        data[props.path],
        cardGenerationTemplates[props.path]
    );

    return (
        <>
            <PrimaryCard
                id={props.match.params.id}
                header={header}
                buttonFunctions={buttonFunctions}
                cards={cards}
                formState={{
                    edit,
                    newItem,
                    setMutationVariables,
                    constraints,
                    setInvalidFields,
                    invalidFields
                }}
            />
            <SecondaryCard
                templates={dataScreenStaticTemplates.secondaryCardData}
                buttons={dataScreenStaticTemplates.buttons.secondary}
                buttonFunctions={secondaryFunctions}
            />
        </>
    );
};
