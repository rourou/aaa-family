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
            label: "Alpha-Corp",
            command: () => {
                navigate('/alpha-corp')
            }
        },
        {
            label: "Recrutement",
            command: () => {
                navigate('/recrutement')
            }
        }
    ]
    const start = <img height="50px" src="./img/Logo.png" />
    return (
        <React.Fragment>
            <Menubar
                className="m-1 text-xl"
                model={items}
                start={start}
            />
        </React.Fragment>
    )
}

export default Menu