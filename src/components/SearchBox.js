//External Imports
import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { SearchSharp } from "@material-ui/icons";

export default props => {
    return (
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
    );
};
