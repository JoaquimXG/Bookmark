//External Imports
import React from "react";

//Custom components
import MyButton from "./MyButton";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    return (
        <div
            className={`${classes.flexRowCenter} ${classes.spaceBetween} ${props.className}`}
        >
            {props.buttons.map((button, index) => {
                return props.edit && button.text === "Edit" ? (
                    <MyButton
                        key={index}
                        text={button.save.text}
                        color={button.color}
                        icon={<button.save.icon />}
                        onClick={props.buttonFunctions[button.save.text]}
                        className={classes.margin1}
                    >
                        {button.save.text}
                    </MyButton>
                ) : (
                    <MyButton
                        key={index}
                        text={button.text}
                        color={button.color}
                        icon={<button.icon />}
                        onClick={props.buttonFunctions[button.text]}
                        className={classes.margin1}
                    />
                );
            })}
        </div>
    );
};
