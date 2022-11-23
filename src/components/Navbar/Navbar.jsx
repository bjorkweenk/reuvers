import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (

            <div>
                <header>
                    <nav>
                    <ul>
              <li><a href="About"> Reuvers</a></li>
              <div class="dropdown">
                            <button class="dropbtn">Diensten</button>
                            <div class="dropdown-content">
                                <a href="#">Bomen rooien</a>
                                <a href="#">Bomen snoeien</a>
                                <a href="#">Bomen verzorging</a>
                                <a href="#">Bomenstronken verwijderen</a>
                                <a href="#">Tuin aanleg en onderhouden </a>
                                <a href="#"> Gazon aanleg en verzorging</a>
                            </div>
                        </div>
              <li><a href="./contact">Contact</a></li>

                        </ul>

                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;