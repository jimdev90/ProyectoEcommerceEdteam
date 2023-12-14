import React from 'react';
import {Link} from "react-router-dom";


const Logo = () => {
    return (
        <div className="flex">
            <Link to="/">
                <img
                    src="https://assets.codepen.io/228448/internal/screenshots/pens/rGMORm.custom.jpg?version=1507739941"
                    alt="Logo EDteam White"
                />
            </Link>
        </div>
    );
};

export default Logo;
