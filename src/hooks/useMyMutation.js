import { useMutation } from "@apollo/client";

export default (mutation, query, cacheId) => {
    // Performs the mutation request to update the item
    // Checks current cache values and updates the cache as required
    const [performMutation] = useMutation(mutation.update, {
        update: (cache, { data }) => {
            const updatedRow = Object.values(data)[0].updatedRow;
            var cachedData;
            try {
                //check if there is relevant cached data
                cachedData = cache.readQuery({
                    query: query
                });
                if (
                    cachedData[cacheId].some(item => item.id === updatedRow.id)
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
                    [cacheId]: [...cachedData[cacheId], updatedRow]
                }
            });
        }
    });

    const [performDelete] = useMutation(mutation.delete, {
        update: (cache, { data }) => {
            //the data object contains a key matching the name of the mutation that was performed
            //the mutation performed will be in this case delete+the name of the path/item currently displayed
            //I have stored this name in the mutation object that is imported
            var id = data[mutation.deleteStringIdentifier];
            cache.modify({
                fields: {
                    //similar to the above, the function that needs to be called matches the name
                    //of the query that we are updating, in this case that will be the plural item name/path
                    [cacheId](existingRefs, { readField }) {
                        //return the whole array of refs unless the referred object's id
                        //matches the id returned from the "delete" mutation
                        return existingRefs.filter(
                            ref => id !== readField("id", ref)
                        );
                    }
                }
            });
        }
    });

    return { performMutation, performDelete };
};
