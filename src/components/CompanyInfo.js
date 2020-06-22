import React from "react";
import { NavBar } from "./NavBar";
import { PrimaryCard } from './PrimaryCard'

export default () => {
    return (
        <div style={{height: "100vh", background: "#BBC7CD"}} >
            <NavBar />
            <PrimaryCard />
        </div>
    );
};
