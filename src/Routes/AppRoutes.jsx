import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Reuvers from '../components/Reuvers/Reuvers';
import Diensten from '../components/Diensten/Diensten';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';

const AppRoutes = () => {

        return (
            <Routes>
            <Route path="/" element={<Reuvers />} />
            <Route path="diensten" element={<Diensten />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About/>}/>      
            </Routes>
        );
    }


export default AppRoutes;