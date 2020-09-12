//External Imports
import React from "react";
import { useQuery } from "@apollo/client";

//Custom Components
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import DisplayMessageCard from "./DisplayMessageCard";

//Functions
import fillDataScreenTemplate from "../static/functions/fillDataScreenTemplate";

//Custom Hooks
import { useFormProvider } from "../hooks/useFormProvider";

//Data, queries, mutations and templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";
import { individualQueries } from "../static/apollo/queries";
import cardGenerationTemplates from "../static/templates/cardGenerationTemplates";
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
                id={id}
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
