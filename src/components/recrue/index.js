import React from "react";

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import '../../styles/ButtonDiscord.css';

const Recrue = (props) => {


    return (
        <div className="md:block lg:flex md:m-1 lg:m-5 align-content-center align-content-center align-items-stretch text-center justify-content-center">
            <div className="p-0 m-0">
                <img className="m-2 border-round hidden lg:block"
                    alt="IMG recrutement"
                    width="500px"
                    src="./img/RecrutementAAA.jpg"
                />
            </div>
            <div className="p-0 m-0 lg:hidden">
                <img className="m-2 border-round"
                    alt="IMG recrutement"
                    width="70%"
                    src="./img/RecrutementAAA.jpg"
                />
            </div>
            <Card
                className="m-2 p-2 align-items-center text-justify"
            >
                <h1 className="text-center">
                    BONJOUR A TOUS AMIS CLASHEURS ET CLASHEUSES
                </h1>
                <p>
                    Vous êtes à la recherche d'un clan,<strong> INUTILE DE CONSULTER LES AUTRES ANNONCES </strong>vous êtes tombés sur la perle rare !
                </p>
                <h2 className="text-center">
                    Voici  L'ARMÉE D'ASTERIX
                </h2>
                <div className="flex flex-column ">
                    <div className="flex justify-content-start ml-4">
                        <i className="pi pi-check mr-2" style={{ 'fontSize': '1.5em', "color": "#FFDA70", "fontWeight": "bold" }} /> <strong>3 clans</strong>
                    </div>
                    <div className="flex justify-content-start ml-6 mt-2 mb-2">
                        <i className="pi pi-check mr-2" style={{ 'fontSize': '1.5em', "color": "#FFDA70", "fontWeight": "bold" }} /> <strong>3 univers différents</strong>
                    </div>
                    <div className="flex justify-content-start ml-8">
                        <i className="pi pi-check mr-2" style={{ 'fontSize': '1.5em', "color": "#FFDA70", "fontWeight": "bold" }} /> <strong>une seule famille, un seul groupe</strong>
                    </div>
                </div>

                <p className="text-center">
                    Guerrier ou farmeur, soyez en sur vous trouverez votre bonheur !
                </p>

                <p>
                    <i className="pi pi-arrow-right mr-2" />
                    <strong>Clan 1 : Armée</strong><br />
                    Clan chill + accès stratégie<br />
                    Recrutement à partir de HDV 12
                </p>
                <p>
                    <i className="pi pi-arrow-right mr-2" />
                    <strong>Clan 2 : Asterix</strong><br />
                    Clan orienté très chil, ambiance déjantée<br />
                    Recrutement à partir de HDV 11
                </p>
                <p>
                    <i className="pi pi-arrow-right mr-2" />
                    <strong>Clan 3 : Alpha</strong><br />
                    Clan orienté vers la stratégie et le rush<br />
                    Recrutement à partir de HDV 11
                </p>
                <p className="text-center">
                    La famille de clan propose de nombreux événements internes, des GDC 50, des FW avec de superbes affiches.<br />

                    Vous passerez chez nous des moments de jeux sans temps mort pour un plaisir maximum !
                </p>

                <div className="text-center">
                    <p>
                        <strong className="text-3xl">
                            Alors Rejoignez nous !
                        </strong>
                    </p>
                    <Button
                        className="pi pi-discord discord p-2 text-6xl"
                        onClick={() => window.open('https://discord.gg/qKCPP3HpV3')}
                    >
                        <span className="text-4xl m-2">Discord</span>
                    </Button>
                </div>
            </Card>
        </div >
    )
}
export default Recrue
