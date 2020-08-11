import React, { useState, useEffect } from "react";
import myMutation2 from "./static/functions/myMutation2";

export const useFormState = queryResult => {
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [mutationVariables, setMutationVariables] = useState(null);

    const logError = error => {
        console.log(error);
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
            //TO-Do
        },
        Save: () => {
            console.log("save");
            if (!mutationVariables) {
                console.log("no values set");
                return false;
            }
            if (newItem) {
                mutationVariables.isnew = newItem;
            } else {
                mutationVariables.id = queryResult.id;
            }
            mutationVariables.site_id = 12345;
            myMutation2(mutationVariables, true)
                .then(result => {
                    console.log(result);
                    setEdit(false);
                    setMutationVariables(null);
                })
                .catch(error => {
                    logError(error);
                });
        }
    };

    return {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables
    };
};
