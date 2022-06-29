import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <img src={require(`../image/logo-clean3000-mini.png`)} alt="logo" className="logo-miniL" />
            <img src={require(`../image/logo-clean3000-transparent.png`)} alt="logo" className="logo-clean" />
            <img src={require(`../image/logo-clean3000-mini.png`)} alt="logo" className="logo-miniR" />
        </header>
    )
}

export default Header;
