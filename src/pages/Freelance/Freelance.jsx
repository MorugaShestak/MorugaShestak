import React from 'react';
import "./Freelance.css"
import FreelanceProject from "../../components/FreelanceProject/FreelanceProject";
import "./Freelance.css"
import Back from "../../components/BackButton/Back";

const Freelance = () => {
    return (
        <div className={"content"}>
            <FreelanceProject title={"getUserFollowers_twitter"} body={"Python script that parse all followers of specific user using Python, Selenium & WebDriver Chrome v104"} price={"30$"}/>
            <FreelanceProject title={"FakeCryptoBot_Telegram"} body={"Telegram bot that imitate cryptocurrency transaction using Python & Telegraf"} price={"60$"}/>
            <FreelanceProject title={"Shelter-NFT-Wallet-Landing"} body={"NFT Landing using HTML & CSS"} price={"100$"}/>
        </div>
    );
};

export default Freelance;