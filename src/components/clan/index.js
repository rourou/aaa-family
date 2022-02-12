import React from "react";

import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Clan = (props) => {

    const clickTag = () => {
        window.open(props.clan.link)
    }
    return (
        <div className="block text-center">

            <div className="mt-3 lg:flex align-content-end justify-content-center align-items-end sm:block">

                <img
                    height="100px"
                    alt="logo"
                    src={props.clan.logo}
                />

                <h1 className="mt-0 mb-0 text-7xl">
                    {props.clan.name}
                </h1>
                <Tag
                    className="m-2 pi pi-hashtag text-xl"
                    value={props.clan.tag}
                />

            </div>
            <Card className="mr-5 ml-5 mt-3 p-2">
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