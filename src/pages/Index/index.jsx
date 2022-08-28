import React from 'react';
import "./index.css";
import logo from "../../assets/logo.jpg"
import blog from "../../assets/blog.jpg"
import git from "../../assets/git.jpg"
import repos from "../../assets/repos.jpg"

const Index = () => {
    return (
        <div>
            <div className="content">
                <div className="content-block">
                    <span className="title">Moruga</span>
                    <div className="links">
                    <a href="https://github.com/MorugaShestak"><img title="My github account" style={{padding: 20}} src={git} alt="git"/></a>
                        <img style={{padding: 20}} title="My Blog" src={blog} alt="blog"/>
                        <img style={{padding: 20}} src={repos} title="My repositories" alt="repos"/>
                    </div>
                </div>
                <div className="logo"> <a href="https://github.com/MorugaShestak"> <img src={logo} alt="Moruga" height={300} width={300} /> </a> </div>
            </div>
        </div>
    );
};

export default Index;