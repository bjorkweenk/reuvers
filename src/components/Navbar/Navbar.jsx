import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (

            <div id="navbar">
                <ul class="nav-bar">
                    <li class="item-nav"><a class="item-nav" href="/">LOGO</a>  </li>
                    <li class="item-nav"><a class="item-nav" href="diensten"> Diensten </a></li>
                    <li class="item-nav"><a class="item-nav" href="reuvers" >Reuvers </a></li>
                    <li class="item-nav"><a class="item-nav" href="contact">Contact </a> </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;