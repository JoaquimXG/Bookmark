import {useMutation} from "@apollo/client";

export const myMutation2 = (mutationVariables, testBool) => {
    console.log(mutationVariables)
    return new Promise((resolve, reject)=> {
        if (testBool){
            resolve("update was successful")
        } else {
            reject("update failed")
        }
    })
    //return { error: false, message: "no error" };
    //apolloMutationFunction({ mutationVariables, errorPolicy: "all" }).then( success => { if (success.errors) { return { error: true, message: success.errors }; } else { return { error: false, message: success }; } }, failure => { return { error: true, message: failure }; }); 
};

export const myMutation3 = (mutationVariables, mutationFunc) => {
    console.log("inside myMutation3", {mutationVariables})
return mutationFunc({ variables: mutationVariables, errorPolicy: "all" })
    //mutationFunc({ mutationVariables, errorPolicy: "all" }).then( success => { if (success.errors) { return { error: true, message: success.errors }; } else { return { error: false, message: success }; } }, failure => { return { error: true, message: failure }; }); 
};
