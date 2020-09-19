import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useMyMutation from "./useMyMutation";
import mutations from "../static/apollo/mutations";
import { itemListQueries, generatePdfQuery } from "../static/apollo/queries";
import { useLazyQuery } from "@apollo/client";

const SITE_ID = 12345

const validateEmptyFields = (fields, constraints) => {
    var updatedInvalidFields = {};

    Object.keys(constraints).forEach(ref => {
        if (!fields[ref]) {
            if (!"".match(constraints[ref])) {
                updatedInvalidFields[ref] = true;
            }
        }
    });
    return updatedInvalidFields;
};

export const useFormProvider = (id, path, data, constraints) => {
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [mutationVariables, setMutationVariables] = useState({ empty: true });
    const [invalidFields, setInvalidFields] = useState({});
    const history = useHistory();
    const [
        loadPdf,
        {
            loading: lazyLoading,
            error: lazyError,
            data: lazyData,
            called: lazyCalled
        }
    ] = useLazyQuery(generatePdfQuery);

    const { performMutation, performDelete } = useMyMutation(
        mutations[path],
        itemListQueries[path].query,
        itemListQueries[path].data
    );

    const resetState = () => {
        setEdit(false);
        setNewItem(false);
        setMutationVariables({ empty: true });
        setInvalidFields({ reset: true });
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
            resetState();
        },
        Delete: () => {
            console.log("delete");
            let variables = { id: id, site_id: SITE_ID };
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
            if (newItem) {
                const updatedInvalidFields = validateEmptyFields(
                    mutationVariables,
                    constraints
                );
                if (Object.keys(updatedInvalidFields).length !== 0) {
                    setInvalidFields({
                        fields: updatedInvalidFields,
                        updated: true
                    });
                    return;
                }
            }

            if (
                mutationVariables.empty ||
                Object.keys(invalidFields).length !== 0
            )
                return;

            const variables = {
                ...mutationVariables,
                id: newItem ? null : id,
                isnew: newItem,
                site_id: SITE_ID
            };
            handleMutationPromise(performMutation, variables);
        },
        Copy: () => {
            setEdit(false);
            var { id, ...dataWithoutId } = data;
            dataWithoutId = {
                ...dataWithoutId,
                isnew: true,
                site_id: SITE_ID
            };
            handleMutationPromise(performMutation, dataWithoutId);
        },
        PDF: () => {
            //TO-DO Integrate PDF generation
            console.log("PDF");
            loadPdf({
                variables: { id: id, site_id: SITE_ID, template: `${path}s` }
            });
        }
    };

    useEffect(()=> {
        if (lazyData) {
            const url = lazyData.generatePdf
            console.log(lazyData.generatePdf);
            window.open(url, '_blank')
        }
    },[lazyData])

    const handleMutationPromise = (mutationFunc, variables) => {
        mutationFunc({
            variables: variables,
            errorPolicy: "all"
        })
            .then(result => {
                console.log(result);
                resetState();
                handleSuccessfulUpdate(result);
            })
            .catch(error => {
                console.log("error:", error);
            });
    };

    const secondaryButtonFunctions = {
        Edit: () => {
            //TO-DO Add edit functionality for secondaryCard
            console.log("edit");
        }
    };

    return {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setInvalidFields,
        invalidFields
    };
};
