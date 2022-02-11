import React from "react";
import { useNavigate } from 'react-router-dom';

import { Menubar } from 'primereact/menubar';

const Menu = (props) => {
    const navigate = useNavigate();
    const items = [
        {
            label: "La Famille",
            command: () => {
                navigate('/')
            }
        },
        {
            label: "L'Armée",
            command: () => {
                navigate('/armee')
            }
        },
        {
            label: "Astérix",
            command: () => {
                navigate('/asterix')
            }
        },
        {
            label: "Alpha Corps",
            command: () => {
                navigate('/alpha-corps')
            }
        },
        {
            label: "Rejoins nous",
            command: () => {
                navigate('/rejoins-nous')
            }
        }
    ]
    const start = <img
        alt="logo"
        height="25px"
        src="./img/Logo.png" />
    return (
        <React.Fragment>
            <Menubar
                className="m-1 p-2"
                model={items}
                start={start}
            />
        </React.Fragment>
    )
}

export default Menu