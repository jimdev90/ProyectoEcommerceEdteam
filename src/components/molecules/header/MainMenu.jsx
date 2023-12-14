import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {deleteToken, getToken} from "../../../helpers/auth.js";

const MainMenu = () => {
    const nav = useNavigate();
    const handleLogout = () => {
        deleteToken()
        nav('/')
    }
    return (
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <Link className="menu-item" to="/">Inicio</Link>
                </li>
                <li className="flex items-center">
                    <Link className="menu-item" to="/productos">Productos</Link>
                </li>
                {
                    !getToken() ? (
                        <li className="flex items-center">
                            <Link className="menu-item" to="/login">Iniciar sesión</Link>
                        </li>
                    ) : (
                        <li className="flex items-center">
                            <a onClick={handleLogout} className="menu-item cursor-pointer">Cerrar sesión</a>
                        </li>
                    )
                }


            </ul>
        </nav>
    );
};

export default MainMenu;
