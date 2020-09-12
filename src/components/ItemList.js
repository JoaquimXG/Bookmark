//External Imports
import React, { useState, useEffect } from "react";
import { Paper, Divider } from "@material-ui/core";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";

// Custom static components
import ItemCategoryErrorBoundary from "./ItemCategoryErrorBoundary";
import DisplayMessageCard from "./DisplayMessageCard";

//Style
import { myStyles } from "../static/css/style";

//Incoming data or templates
import { itemListQueries, generatePdfQuery } from "../static/apollo/queries";
import mutations from "../static/apollo/mutations";
import ItemListTableContainer from "./ItemListTableContainer";
import ItemListHeader from "./ItemListHeader";

//TO-DO remove Hard Coded SITE_ID
const SITE_ID = 12345;

export default props => {
    const classes = myStyles();
    const [selected, setSelected] = useState({});
    const itemType = `${props.path}s`;

    const { loading, error, data } = useQuery(
        itemListQueries[props.path].query
    );

    const [
        loadPdf,
        {
            data: lazyData,
        }
    ] = useLazyQuery(generatePdfQuery);

    useEffect(()=> {
        if (lazyData) {
            const url = lazyData.generatePdf
            console.log(lazyData.generatePdf);
            window.open(url, '_blank')
        }
    },[lazyData])

    const [performDelete] = useMutation(mutations[props.path].delete, {
        update: (cache, { data }) => {
            var id = data[mutations[props.path].deleteStringIdentifier];
            cache.modify({
                fields: {
                    [itemType](existingRefs, { readField }) {
                        return existingRefs.filter(
                            ref => id !== readField("id", ref)
                        );
                    }
                }
            });
        }
    });

    const toggleSelectAll = e => {
        const isChecked = e.target.checked;
        var newSelected = {};
        data[itemType].forEach(value => {
            newSelected[value.id] = isChecked;
        });
        setSelected(newSelected);
    };

    const toggleSelected = e => {
        const isChecked = e.target.checked;
        const id = e.target.id;
        setSelected(current => ({ ...current, [id]: isChecked }));
    };

    const butttonFunctions = {
        Delete: () => {
            console.log("Delete");
            Object.entries(selected).forEach(([id, isChecked]) => {
                if (isChecked) {
                    performDelete({
                        variables: { id: id, site_id: SITE_ID }
                    });
                } else {
                    console.log("not deleting", id);
                }
            });
        },
        PDF: () => {
            console.log("PDF");
            loadPdf({ variables: { site_id: SITE_ID, template: itemType } });
        },
        New: () => {
            console.log("New");
        }
    };

    if (loading) return <DisplayMessageCard variant="loading" />;
    if (error) return <DisplayMessageCard variant="error" />;

    return (
        <ItemCategoryErrorBoundary myclasses={classes}>
            <Paper className={classes.itemList} elevation={8}>
                <ItemListHeader buttonFunctions={butttonFunctions} />
                <Divider />
                <ItemListTableContainer
                    data={data}
                    path={props.path}
                    selected={selected}
                    toggleSelectAll={toggleSelectAll}
                    toggleSelected={toggleSelected}
                />
            </Paper>
        </ItemCategoryErrorBoundary>
    );
};
