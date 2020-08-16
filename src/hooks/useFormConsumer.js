import { useState } from "react";

export const useFormConsumer = (
    setMutationVariables,
    setInvalidFields,
    constraints
) => {
    const [localInvalidFields, setLocalInvalidFields] = useState({});

    const validateField = (value, ref, constraint) => {
        if (value.match(constraint)) {
            setLocalInvalidFields(current => {
                let { [ref]: refToRemove, ...updatedObject } = current;
                if (Object.values(updatedObject).length === 0) {
                    setInvalidFields({error: true});
                }
                return updatedObject;
            });
        } else {
            setLocalInvalidFields(current => {
                var updatedObject = { ...current, [ref]: true };
                setInvalidFields(updatedObject);
                return { ...current, [ref]: true };
            });
        }
    };

    const handleEdit = event => {
        let ref = event.target.id;
        let value = event.target.value;
        setMutationVariables(current => ({
            ...current,
            [ref]: value
        }));
        if (localInvalidFields[ref]) {
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

    return { localInvalidFields, handleBlur, handleEdit };
};
