//External Imports
import React from "react";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

//Custom Components
import SearchBox from "./SearchBox";

//Style
import { myStyles } from "../static/css/style";

//Templates
import { buttons } from "../static/templates/itemListStaticTemplates";

export default props => {
    const theme = useTheme();
    const classes = myStyles();

    return (
        <header className={classes.itemListHeader}>
            <SearchBox />
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
    );
};
