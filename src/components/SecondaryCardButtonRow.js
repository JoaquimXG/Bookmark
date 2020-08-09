//External Imports
import React from "react";

//Custom components
import MyButton from "./MyButton";

//Style
import { myStyles } from "../static/css/style";

export default props => {
    const classes = myStyles();

    const edit = true;
    return (
        <div className={`${classes.flexRowCenter} ${classes.spaceBetween}`}>
            {props.buttons.map((button, index) => {
                return edit && button.text === "Edit" ? (
                    <MyButton
                        key={index}
                        text={button.save.text}
                        icon={<button.save.icon />}
                        className={classes.buttonBlue}
                        onClick={props.handleClick[button.save.text]}
                    >
                        {button.save.text}
                    </MyButton>
                ) : (
                    <MyButton
                        key={index}
                        text={button.text}
                        icon={<button.icon />}
                        className={classes[button.class]}
                        onClick={props.handleClick[button.text]}
                    />
                );
            })}
        </div>
    );
};
