import React from 'react';
import "./GithubCard.css"

const GithubCard = ({card, repo, url}) => {


    return (
        <img onClick={() => {
            window.open(url)
        }}  src={card} alt={repo} title={repo}>

        </img>
    );
};

export default GithubCard;