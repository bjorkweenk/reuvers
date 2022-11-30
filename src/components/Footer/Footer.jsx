import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {
    render() {
        return (
            <>
            <footer>
                    <div className="img">
                       <a href="./home"> <img className="./reuvers.jpg" src='../logobw.png' width={50} height={50}></img></a>
                        <span className="rights"> All rights Reuvers 2022© </span>
                    </div>
            </footer>
        </>
        );
    }
}

export default Footer;