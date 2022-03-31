import React from 'react';
import './Home.css';
import {Card} from "antd";

const Home = ({currentAccount}) => {
    return (
        <Card className='home'>
            <h1>Public ETH address:</h1> <br/>
            <p style={{color: '#fff'}}>{currentAccount}</p>
        </Card>
    );
};

export default Home;