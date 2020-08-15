import { useState } from "react";
import { myMutation3 } from "../static/functions/myMutation2";
import { useHistory } from "react-router-dom";

export const useFormProvider = (id, mutationFunc, path) => {
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [mutationVariables, setMutationVariables] = useState(null);
    const [error, setError] = useState(false);
    const history = useHistory();

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
            //TO-Do
        },
        Save: async () => {
            console.log("save");
            if (error || !mutationVariables) {
                console.log("Form is empty or there are validation errors");
                return;
            }
            if (!newItem) {
                mutationVariables.id = id;
            }
            mutationVariables.isnew = newItem;
            mutationVariables.site_id = 12345;
            myMutation3(mutationVariables, mutationFunc)
                .then(result => {
                    console.log(result);
                    setEdit(false);
                    setMutationVariables(null);
                })
                .catch(error => {
                    console.log("inside error")
                    logError(error);
                });
        }
    };

    return {
        buttonFunctions,
        formState: { edit, newItem },
        setMutationVariables,
        setError
    };
};
