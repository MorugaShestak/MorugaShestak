import React from 'react';
import classes from "./FreelanceProjects.module.css"

const FreelanceProject = ({title, body, price}) => {

    return (
        <div className={classes.content}>
            <div className={classes.title}>
                {title} <br/>
                <span className={classes.price}>Price: <span style={{color:"#3CB371"}}>{price}</span></span>

            </div>
            <div className={classes.body}>{body}</div>
        </div>
    );
};

export default FreelanceProject;