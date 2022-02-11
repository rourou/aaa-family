import React from "react";
import { useNavigate } from "react-router";

const Familly = (props) => {
    const navigate = useNavigate()

    return (
        <div className="block text-center">

            <img
                alt="logo"
                height="150px"
                className="mt-3 mb-0"
                src="./img/logo.png"
            />
            <h1 className=" mt-0 text-7xl">
                Une Famille
            </h1>

            <div className="flex justify-content-center">
                <div
                    onClick={() => navigate('/armee')}
                    className="m-2">
                    <img
                        alt="ecusson clan armee"
                        width="150px" src="./img/armee-ecusson.png" />
                    <h2>L'armée</h2>
                </div>
                <div
                    onClick={() => navigate('/asterix')}
                    className="m-2">
                    <img
                        alt="ecusson clan asterix"
                        width="150px" src="./img/asterix-ecusson.png" />
                    <h2>Astérix Team</h2>
                </div>
                <div
                    onClick={() => navigate('/alpha-corps')}
                    className="m-2">
                    <img
                        alt="ecusson clan alpha-corps"
                        width="150px" src="./img/alpha-corps-ecusson.png" />
                    <h2>Alpha Corps</h2>
                </div>
            </div>
        </div>
    )
}
export default Familly