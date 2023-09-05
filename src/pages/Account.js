import React from 'react';
import Main from '../components/Main.js';
import Row from '../components/Row.js';
import requests from '../Requests.js';

const Account = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Popular' fetchURL={requests} />
            <Row rowID='2' title='Trending' fetchURL={requests} />
            <Row rowID='3' title='Top Rated' fetchURL={requests} />
            <Row rowID='4' title='Upcoming' fetchURL={requests} />
        </>
    );
};

export default Account;