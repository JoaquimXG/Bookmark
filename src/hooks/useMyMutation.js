import { useMutation } from "@apollo/client";

export default (mutation, query, path) => {
    // Performs the mutation request to update the item
    // Checks current cache values and updates the cache as required
    const [performMutation] = useMutation(mutation, {
        update: (cache, { data }) => {
            const itemType = `${path}s`;
            var cachedData;
            try {
                //check if there is relevant cached data
                cachedData = cache.readQuery({
                    query: query
                });
                if (
                    cachedData[itemType].some(
                        item => item.id === data[path].updatedRow.id
                    )
                ) {
                    //item already exists and will be updated automatically
                    return null;
                }
            } catch {
                //no action required as cache will be correct after query is made for the first time
                return null;
            }
            //update the cache with the data returned from the mutation
            //using the same query as was initially used to populate the itemList cached data
            //the correct fields will be pulled from the data automatically thanks to the query
            cache.writeQuery({
                query: query,
                data: {
                    [itemType]: [...cachedData[itemType], data[path].updatedRow]
                }
            });
        }
    });

    //TO-DO - REMOVE
    const myMutation = (mutationVariables, mutationFunc) => {
        console.log(mutationVariables);
        return mutationFunc({ mutationVariables, errorPolicy: "all" });
        //mutationFunc({ mutationVariables, errorPolicy: "all" }).then( success => { if (success.errors) { return { error: true, message: success.errors }; } else { return { error: false, message: success }; } }, failure => { return { error: true, message: failure }; });
    };

    return performMutation;
};
