export default (
    isNew,
    id,
    updatedValues,
    updateFunction,
    handleErrorFunction,
    handleSuccessfulUpdateFunction,
    site_id = 12345
) => {
    var variables = {};
    if (!isNew) {
        variables.id = id;
    }
    //TO-DO remove hardcode site_id
    variables.site_id = site_id;
    variables.isnew = isNew;
    Object.keys(updatedValues).map(
        //loop through the formvalues object and copy values into variables
        //if the string is empty then copy across null instead
        //the empty string will be accepted and then we can't assess for empty fields
        key =>
            (variables[key] =
                updatedValues[key] === "" ? null : updatedValues[key])
    );
    updateFunction({ variables: variables, errorPolicy: "all" }).then(
        success => {
            if (success.errors) {
                handleErrorFunction(success.errors);
            } else {
                handleSuccessfulUpdateFunction(success);
            }
        },
        failure => {
            handleErrorFunction(failure);
        }
    );
};
