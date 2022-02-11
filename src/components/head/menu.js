import React from "react";
import { Link } from 'react-router-dom';

const Menu = (props) => {

    return (
        <React.Fragment>
            <nav>
                <Link to="/famille">La Famille</Link>
                <Link to="/armee">L'Armée'</Link>
                <Link to="/asterix">Astérix</Link>
                <Link to="/alpha-corp">Alpha-Corp</Link>
                <Link to="/recrutement">Recrutement</Link>
            </nav>
        </React.Fragment>
    )
}

export default Menu