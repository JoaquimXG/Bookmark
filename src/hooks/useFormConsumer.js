import { useState } from "react";

export const useFormConsumer = (
    setMutationVariables,
    setError,
    constraints
) => {
    const [invalidFields, setInvalidFields] = useState({});

    const validateField = (value, ref, constraint) => {
        if (value.match(constraint)) {
            setInvalidFields(current => {
                //Removes [ref] key from the current object
                //returning object without [ref]
                let { [ref]: refToRemove, ...updatedObject } = current;
                return updatedObject;
            });
            if (Object.values(invalidFields).length === 0) {
                setError(false);
            }
        } else {
            setInvalidFields(current => ({ ...current, [ref]: true }));
            setError(true);
        }
    };

    const handleEdit = event => {
        let ref = event.target.id;
        let value = event.target.value;
        setMutationVariables(current => ({
            ...current,
            [ref]: value
        }));
        if (invalidFields[ref]) {
            validateField(value, ref, constraints[ref]);
        }
    };

    const handleBlur = event => {
        let ref = event.target.id;
        let value = event.target.value;
        if (constraints[ref]) {
            validateField(value, ref, constraints[ref]);
        }
    };

    return { invalidFields, handleBlur, handleEdit };
};
