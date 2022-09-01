import React from 'react';
import classes from "./Back.module.css"
import {Link} from "react-router-dom";

const Back = () => {

    return (
        <div className={classes.content}>
            <Link to={"/"}>Back</Link>
        </div>
    );
};

export default Back;