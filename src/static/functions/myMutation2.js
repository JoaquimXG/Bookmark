export default (mutationVariables, apolloMutationFunction, site_id) => {
    mutationVariables.site_id = site_id;
    console.log("mutationVariables", mutationVariables);

    return { error: false, message: "no error" };
    apolloMutationFunction({ mutationVariables, errorPolicy: "all" }).then(
        success => {
            if (success.errors) {
                return { error: true, message: success.errors };
            } else {
                return { error: false, message: success };
            }
        },
        failure => {
            return { error: true, message: failure };
        }
    );
};
