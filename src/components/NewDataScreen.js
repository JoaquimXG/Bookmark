//External Imports
import React from "react";
import { useHistory } from "react-router-dom";

//Custom Components
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";

//Functions
import fillDataScreenTemplate from "../static/functions/fillDataScreenTemplate";

//Custom Hooks
import { useFormProvider } from "../hooks/useFormProvider";

//Data, queries, mutations and templates
import dataScreenStaticTemplates from "../static/templates/dataScreenStaticTemplates";
import cardGenerationTemplates from "../static/templates/cardGenerationTemplates";
import formConstraints from "../static/templates/formConstraints";

export default props => {
    var id = parseInt(props.match.params.id);
    const constraints = formConstraints[props.path];
    const history = useHistory();

    var {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setInvalidFields,
        invalidFields
    } = useFormProvider(
        id,
        props.path,
        null,
        constraints,
        true
    );

    var {
        Edit,
        New,
        Delete,
        ...secondaryFunctions
    } = buttonFunctions;

    buttonFunctions.Cancel = () => {
        history.replace(`/${props.path}s`)
    } 

    const { cards, header } = fillDataScreenTemplate(
        {},
        cardGenerationTemplates[props.path]
    );

    return (
        <>
            <PrimaryCard
                controlButtons
                buttons={dataScreenStaticTemplates.newOnlyButtons}
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
