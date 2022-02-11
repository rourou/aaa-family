import React from "react";
import { Button } from 'primereact/button';

const Familly = (props) => {

    return (
        <div className="block text-center">
            <h1>
                Une Famille
            </h1>

            <div className="flex justify-content-center">
                <div className="m-2">
                    <img width="150px" src="./img/armee-ecusson.png" />
                    <h2>L'armée</h2>
                </div>
                <div className="m-2">
                    <img width="150px" src="./img/asterix-ecusson.png" />
                    <h2>Astérix Team</h2>
                </div>
                <div className="m-2">
                    <img width="150px" src="./img/alpha-corps-ecusson.png" />
                    <h2>Alpha Corps</h2>
                </div>
            </div>
        </div>
    )
}
export default Familly