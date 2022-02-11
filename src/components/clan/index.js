import React from "react";

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Clan = (props) => {

    const clickTag = () => {
        window.open(props.clan.link)
    }
    return (
        <div className="block text-center">

            <div className="mt-3 flex align-content-center justify-content-center">

                <img
                    height="100px"
                    alt="logo"
                    src={props.clan.logo}
                />

                <div className=" block">
                    <h1 className="mt-0 mb-0 text-7xl">
                        {props.clan.name}
                    </h1>
                    <h2 className="mt-0">
                        {props.clan.tag}
                    </h2>
                </div>

            </div>
            <Card className="m-5 p-2">
                {props.clan.description}
                <div>
                    <Button
                        className="mt-4"
                        label="Rejoins nous dans le jeu"
                        onClick={() => clickTag()}
                    />
                </div>
            </Card>


        </div >
    )
}
export default Clan