import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import { AppBarHeight } from "../App";

const styles = theme => ({
    body: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        marginLeft: "275px",
        paddingBottom: "25px",
        paddingTop: "25px",
        paddingRight: "25px"
    },
    main: {
        height: `calc(100vh - ${AppBarHeight.xs}px)`,
        background: "#BBC7CD",
        [theme.breakpoints.up("sm")]: {
            height: `calc(100vh - ${AppBarHeight.sm}px)`
        }
    },
    paper: {
        flexGrow: 1
    }
});

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={this.props.classes.main}>
                    <Box className={this.props.classes.body}>
                        <Paper className={this.props.classes.paper} elevation={8}>
                            <Typography variant="h1">
                                Something has gone wrong
                            </Typography>
                        </Paper>
                    </Box>
                </div>
            );
        }
        return this.props.children;
    }
}

export default withStyles(styles, { withTheme: true })(ClassComponent);
