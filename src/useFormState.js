import React, { useState, useEffect } from "react";
import myMutation2 from "./static/functions/myMutation2";

export const useFormState = queryResult => {
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [mutationVariables, setMutationVariables] = useState(null);

    const logError = error => {
        console.log(error);
    };

    const buttonFunctions = {
        Edit: () => {
            console.log("edit");
            setEdit(!edit);
        },
        Delete: () => {
            console.log("delete");
        },
        Cancel: () => {
            console.log("Cancel");
            setEdit(false);
            setNewItem(false);
        },
        New: () => {
            console.log("new");
            setEdit(true);
            setNewItem(true);
        },
        Save: () => {
            console.log("save");
            setSubmitting(true);
        }
    };

    useEffect(() => {
        if (!submitting && mutationVariables !== null) {
            if (newItem) {
                mutationVariables.isnew = newItem;
            } else {
                mutationVariables.id = queryResult.id;
            }
            mutationVariables.site_id = 12345
            myMutation2(mutationVariables)
                .then((result)=> {
                    console.log(result)
                    setEdit(false)
                    setMutationVariables(null)
                })
                .catch((error)=>{
                    logError(error)
                })
        }
    }, [submitting, mutationVariables, newItem, setEdit, queryResult]);

    return {
        buttonFunctions,
        formState: { edit, newItem, submitting },
        formFunctions: { setEdit, setNewItem, setSubmitting },
        setMutationVariables
    };
};
