import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {

  render() {
    return (
        <header>
            <img alt="Tom's Hardware" src="./images/logo.jpg" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><Link to="/specials">Specials</Link></li>
            </ul>
        </header>
    )
  }
}