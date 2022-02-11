import React from "react";

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import '../../styles/ButtonDiscord.css';

const Recrue = (props) => {


    return (
        <div className="flex m-5 align-content-center">
            <Card
                className="m-2 p-5 align-items-center "
                title="BONJOUR A TOUS AMIS CLASHEURS ET CLASHEUSES"
                subTitle="Vous êtes à la recherche d'un clan, INUTILE DE CONSULTER LES AUTRES ANNONCES vous êtes tombés sur la perle rare !"
            >
                <h3>
                    Voici  L'ARMÉE D'ASTERIX
                </h3>
                <div className="flex flex-column ">
                    <div>
                        <i className="pi pi-chevron-right" style={{ 'fontSize': '1.5em' }}> 3 clans</i>
                    </div>
                    <div>
                        <i className="pi pi-chevron-right" style={{ 'fontSize': '1.5em' }}> 3 univers différents</i>
                    </div>
                    <div>
                        <i className="pi pi-chevron-right" style={{ 'fontSize': '1.5em' }}> une seule famille, un seul groupe</i>
                    </div>
                </div>

                <p>
                    Guerrier ou farmeur, soyez en sur vous trouverez votre bonheur !
                </p>
                <p>
                    Clan 1 : Armée //  Clan chill + accès stratégie
                    Recrutement à partir de HDV 12
                </p>
                <p>
                    Clan 2 : Asterix //  Clan orienté très chil, ambiance déjantée
                    Recrutement à partir de HDV 11
                </p>
                <p>
                    Clan 3 : Alpha // Clan orienté vers la stratégie et le rush
                    Recrutement à partir de HDV 11
                </p>
                <p>
                    La famille de clan propose de nombreux événements internes, des GDC 50, des FW avec de superbes affiches.<br />

                    Vous passerez chez nous des moments de jeux sans temps mort pour un plaisir maximum !
                </p>

                <p>
                    Alors Rejoignez nous !
                </p>
                <Button
                    className="pi pi-discord discord p-2 text-6xl"
                    onClick={() => window.open('https://discord.gg/qKCPP3HpV3')}
                >
                    <span className="text-4xl m-2">Discord</span>
                </Button>
            </Card>
            <img className="m-2"
                height="400px" src="./img/RecrutementAAA.jpg" />
        </div >
    )
}
export default Recrue