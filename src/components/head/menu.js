import React from "react";
import { useNavigate } from 'react-router-dom';

import { Menubar } from 'primereact/menubar';
import { SlideMenu } from 'primereact/slidemenu';
import { Button } from "primereact/button";

const Menu = (props) => {
    const navigate = useNavigate();
    const menu = React.useRef(null);
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
                className="m-1 p-2 hidden lg:flex"
                model={items}
                start={start}
            />
            <div className="lg:hidden m-2">
                {start}
                <SlideMenu className="m-2" ref={menu} model={items} popup viewportHeight={230} menuWidth={175}></SlideMenu>
                <Button className="ml-2" type="button" icon="pi pi-bars" label="Menu" onClick={(event) => menu.current.toggle(event)}></Button>
            </div>


        </React.Fragment>
    )
}

export default Menu