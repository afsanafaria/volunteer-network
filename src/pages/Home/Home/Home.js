import React from 'react';
import Banner from '../Banner/Banner';
import Events from './Events/Events';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Events></Events>
        </div>
    );
};

export default Home;