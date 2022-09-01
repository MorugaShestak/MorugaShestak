import React from 'react';
import "./index.css";
import logo from "../../assets/logo.jpg"
import blog from "../../assets/blog.jpg"
import freelance from "../../assets/freelance.png"
import links from "../../assets/links.png"
import repos from "../../assets/repos.jpg"
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <div className="content-index">
                <div className="content-block">
                    <span className="title">Moruga</span>
                    <div className="links">
                        <Link to="/freelance"><img width={132} height={128} title="My Freelance Projects" style={{padding: 20}} src={freelance} alt="git"/></Link>
                        <a href="https://linktr.ee/MorugaShestak"><img style={{padding: 20}} width={132} height={128} title="Links" src={links} alt="blog"/></a>
                        <Link to="/repos"><img style={{padding: 20}} src={repos} title="My repositories" alt="repos"/></Link>
                    </div>
                </div>
                <div className="logo"> <a href="https://github.com/MorugaShestak"> <img src={logo} title={"My Github"} alt="Moruga" height={300} width={300} /> </a> </div>
            </div>
        </div>
    );
};

export default Index;