import { useState } from "react";
import { useHistory } from "react-router-dom";
import useMyMutation from "./useMyMutation";
import mutations from "../static/apollo/mutations";
import { itemListQueries } from "../static/apollo/queries";

const validateForm = (initialData, fields, constraints, invalidFields) => {
    console.log("constraints",constraints)
    if (invalidFields.error || !fields) return false;
};

export const useFormProvider = (id, path, data, constraints) => {
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [mutationVariables, setMutationVariables] = useState(null);
    const [invalidFields, setInvalidFields] = useState(false);
    const history = useHistory();

    const { performMutation, performDelete } = useMyMutation(
        mutations[path],
        itemListQueries[path].query,
        itemListQueries[path].data
    );

    const logError = error => {
        console.log(error);
    };

    const handleSuccessfulUpdate = success => {
        let id = success.data[path].updatedRow.id;
        //TO-DO, is replace always the right choice
        history.replace(`/${path}s/${id}`);
    };

    const buttonFunctions = {
        Edit: () => {
            console.log("edit");
            setEdit(!edit);
        },
        New: () => {
            console.log("new");
            setEdit(false);
            setTimeout(() => {
                setNewItem(true);
                setEdit(true);
            }, 1);
        },
        Cancel: () => {
            console.log("Cancel");
            setEdit(false);
            setNewItem(false);
            setMutationVariables(null);
        },
        Delete: () => {
            console.log("delete");
            let variables = { id: id, site_id: 12345 };
            performDelete({
                variables: variables,
                errorPolicy: "all"
            })
                .then(success => {
                    console.log("succes", success);
                    history.replace("./");
                })
                .catch(failure => {
                    console.log("failure", failure);
                });
        },
        Save: () => {
            console.log(invalidFields);
            const isValid = validateForm(
                data,
                mutationVariables,
                constraints,
                invalidFields
            );
            if (!isValid) return;
            const variables = {
                ...mutationVariables,
                id: newItem ? null : id,
                isnew: newItem,
                site_id: 12345
            };
            handleMutationPromise(performMutation, variables);
        },
        Copy: () => {
            setEdit(false);
            var { id, ...dataWithoutId } = data;
            dataWithoutId = {
                ...dataWithoutId,
                isnew: true,
                site_id: 12345
            };
            handleMutationPromise(performMutation, dataWithoutId);
        },
        PDF: () => {
            //TO-DO
            console.log("PDF");
            //loadPdf();
        }
    };

    const handleMutationPromise = (mutationFunc, variables) => {
        mutationFunc({
            variables: variables,
            errorPolicy: "all"
        })
            .then(result => {
                console.log(result);
                setEdit(false);
                setMutationVariables(null);
                handleSuccessfulUpdate(result);
            })
            .catch(error => {
                console.log("inside error");
                logError(error);
            });
    };

    const secondaryButtonFunctions = {
        Edit: () => {
            //TO-DO
            console.log("edit");
        }
    };

    return {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setInvalidFields
    };
};
