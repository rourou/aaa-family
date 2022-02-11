import React from "react";
import { Button } from 'primereact/button';

const Clan = (props) => {

    const clickTag = () => {
        window.open(props.clan.link)
    }
    return (
        <div className="block text-center">
            <h1>
                {props.clan.name}
            </h1>
            <div>
                <Button
                    className="m-4"
                    label={props.clan.tag}
                    onClick={() => clickTag()}
                />
            </div>
            <div>
                <img
                    alt="construction"
                    src="./construction.png" />
            </div>
        </div>
    )
}
export default Clan