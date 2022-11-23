import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Diensten from '../components/Diensten/Diensten';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';

const AppRoutes = () => {

        return (
            <Routes>
            <Route path="home" element={<Home />} />
            <Route path="diensten" element={<Diensten />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About/>}/>      
            </Routes>
        );
    }


export default AppRoutes;