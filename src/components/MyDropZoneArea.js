import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const myTheme = createMuiTheme({
    overrides: {
       	MuiDropzoneArea: {
            textContainer : {
                display: "none"
            },
            root: {
                minHeight: 0,
                width: "60%"
            }
        },
    }
});

class MyDropzoneArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }
    handleChange(files) {
        this.setState({
            files: files
        });
    }
    render() {
        return (
            <MuiThemeProvider theme={myTheme}>
                <DropzoneArea onChange={this.handleChange.bind(this)} />
            </MuiThemeProvider>
        );
    }
}

export default MyDropzoneArea;
