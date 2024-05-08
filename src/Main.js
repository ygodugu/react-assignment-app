import React from 'react';
import Header from './pages/Header';
import Navbar from './components/Navbar';
import HeaderScroll from './components/HeaderScroll';
import FastScroll from './components/FastScroll';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HeaderScroll />
            <FastScroll />
        </div>
    )
}

export default Main;
