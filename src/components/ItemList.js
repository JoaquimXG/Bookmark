//External Imports
import React from "react";
import {
    Paper,
    makeStyles,
    Box,
    Divider,
    Button,
    useTheme,
    TextField,
    InputAdornment,
    IconButton,
    Table,
    TableContainer,
    TableBody,
    Typography
} from "@material-ui/core";
import { SearchSharp } from "@material-ui/icons";
import { useQuery } from "@apollo/client";

// Custom static components
import TableHeadExtended from "./TableHeadExtended";
import TableRowExtended from "./TableRowExtended";
import ItemCategoryErrorBoundary from "./ItemCategoryErrorBoundary";

//Incoming data or templates
import { drawerWidth, AppBarHeight } from "../App";
import { itemListQueries } from "../static/apollo/queries";
import {
    columnHeaders,
    buttons
} from "../static/templates/itemListStaticTemplates";

const margin = 25;

const useStyles = makeStyles(theme => ({
    main: {
        //When the drawer is being show, the main container needs
        //to move in by the width of the drawer
        [theme.breakpoints.up("sm")]: {
            paddingLeft: drawerWidth + margin,
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        },
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        padding: margin,
        display: "flex",
        background: "#BBC7CD"
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
    },

    header: {
        display: "flex",
        alignItems: "center",
        justifyItems: "space-between",
        height: 75,
        padding: theme.spacing(3)
    },

    tableContainer: {
        height: "100%"
    }
}));

export default props => {
    const classes = useStyles();
    const theme = useTheme();

    const { loading, error, data } = useQuery(
        itemListQueries[props.path].query
    );

    if (error) return <p>Error</p>;

    return (
        <ItemCategoryErrorBoundary myclasses={classes}>
            <Box className={classes.main}>
                <Paper className={classes.paper} elevation={8}>
                    <header className={classes.header}>
                        <TextField
                            label="Search"
                            size="small"
                            style={{
                                flexGrow: 1,
                                marginRight: "10px"
                            }}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchSharp />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {buttons.map((Value, index) => {
                            return (
                                <Button
                                    key={index}
                                    variant="contained"
                                    startIcon={<Value.icon />}
                                    size="small"
                                    style={{
                                        margin: theme.spacing(1),
                                        color: "white",
                                        background: Value.color
                                    }}
                                >
                                    {Value.text}
                                </Button>
                            );
                        })}
                    </header>
                    <Divider />
                    <TableContainer className={classes.tableContainer}>
                        {loading ? (
                            <Typography variant="h1">Loading...</Typography>
                        ) : (
                            <Table stickyHeader>
                                <TableHeadExtended
                                    columns={columnHeaders[props.path]}
                                />
                                <TableBody>
                                    {data[itemListQueries[props.path].data].map(
                                        row => (
                                            <TableRowExtended
                                                columns={columnHeaders[props.path]}
                                                path={props.path}
                                                key={row.id}
                                                row={row}
                                            />
                                        )
                                    )}
                                </TableBody>
                            </Table>
                        )}
                    </TableContainer>
                </Paper>
            </Box>
        </ItemCategoryErrorBoundary>
    );
};
