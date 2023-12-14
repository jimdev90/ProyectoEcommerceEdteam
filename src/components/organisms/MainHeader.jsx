import React from 'react';
import Logo from "../molecules/header/Logo.jsx";
import MainMenu from "../molecules/header/MainMenu.jsx";

function MainHeader() {
    return (
        <div>
            <Logo/>
            <MainMenu/>
        </div>
    );
}

export default MainHeader;
