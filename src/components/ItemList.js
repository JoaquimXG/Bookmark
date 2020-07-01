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
import { drawerWidth } from "../App";
import TableHeadExtended from "./TableHeadExtended";
import TableRowExtended from "./TableRowExtended";
import { useQuery } from "@apollo/react-hooks"; 
import { gql } from "apollo-boost";

const margin = 25;

const useStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: drawerWidth + margin
        },
        margin: margin,
        display: "flex",
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

const sites = gql`
    {
        assets(site_id: 235549) {
            id
            name
            type
            external_ip
            model
        }
    }
`;

export default props => {
    const classes = useStyles();
    const theme = useTheme();

    const template = props.columns.map(column => column.id)

    const { loading, error, data } = useQuery(sites);

    if (error) return <p>Error</p>;

    const parseRows = (rows, template) => {
        const parsedRows = rows.map(row => ({
            data: [
                row[template[0]],
                row[template[1]],
                row[template[2]],
                row[template[3]]
            ],
            id: row.id
        }));
        return parsedRows
    };

    console.log("template", template)
    console.log("apidata", data)
    const test =data? console.log("apidata", data.assets): null

    const parsedRows = parseRows(props.rows, template)

    return (
        <Box className={classes.main}>
            <Paper
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1
                }}
                elevation={8}
            >
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
                    {props.buttons.map((Value, index) => {
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
                    { loading ? <Typography variant="h1">Loading...</Typography>: 
                    <Table stickyHeader>
                        <TableHeadExtended columns={props.columns} />
                        <TableBody>
                            {parsedRows.map((row, index) => (
                                <TableRowExtended
                                    path={props.path}
                                    key={index}
                                    row={row}
                                />
                            ))}
                        </TableBody>
                    </Table>
                }
                </TableContainer>
            </Paper>
        </Box>
    );
};
