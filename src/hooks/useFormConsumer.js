import { useState } from "react";

export const useFormConsumer = (
    setMutationVariables,
    setInvalidFields,
    constraints,
    invalidFields
) => {
    const [localInvalidFields, setLocalInvalidFields] = useState({});

    //Updating errored fields after validation at formProvider onSubmit
    if (invalidFields.updated) {
        const updatedFields = {
            ...invalidFields.fields,
            ...localInvalidFields
        };
        setInvalidFields(() => {
            setLocalInvalidFields(updatedFields);
            return updatedFields;
        });
    }
    //Reset, used after cancel or successful update
    if (invalidFields.reset) {
        setInvalidFields(() => {
            setLocalInvalidFields({});
            return {};
        });
    }

    //if value doesn't match constraints, add it to invalidFields + localInvalidFields
    //if value now matches, remove from invalid fields
    const validateField = (value, ref, constraint) => {
        if (value.match(constraint)) {
            setLocalInvalidFields(current => {
                let { [ref]: refToRemove, ...updatedObject } = current;
                if (Object.values(updatedObject).length === 0) {
                    setInvalidFields({});
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
            [ref]: value,
            empty: false
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
