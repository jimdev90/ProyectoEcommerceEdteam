import React from 'react';
import {Link} from "react-router-dom";


const Logo = () => {
    return (
        <div className="flex">
            <Link to="/">
                <img
                    src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.14/mercadolibre/logo__large_plus.png"
                    alt="Logo Mercado Libre"
                />
            </Link>
        </div>
    );
};

export default Logo;
