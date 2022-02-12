import React from "react";
import { useNavigate } from "react-router";
import { Carousel } from 'primereact/carousel';
import { Card } from "primereact/card";

const Familly = (props) => {
    const navigate = useNavigate()

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const clanTemplate = (clan) => {
        return (
            <Card className="m-2">
                <div
                    onClick={() => navigate(`/${clan.nameLink}`)}
                    className="m-0">
                    <img
                        alt={`ecusson clan ${clan.nameLink}`}
                        width="150px"
                        src={`./img/${clan.nameLink}-ecusson.webp`}
                        className="p-0"
                    />
                    <h2>{clan.name}</h2>
                </div>
            </Card >
        )
    }
    let clans = []
    for (let clan in props.clans) {
        clans.push(props.clans[clan])
    }

    console.log('clans:', clans)

    return (
        <div className="block text-center justify-content-center">

            <img
                alt="logo"
                height="100px"
                className="mt-3 mb-0"
                src="./img/logo.png"
            />
            <Carousel
                style={{ maxWidth: '800px', margin: 'auto' }}
                value={clans}
                itemTemplate={clanTemplate}
                numVisible={3} numScroll={1}
                responsiveOptions={responsiveOptions}
                header={
                    <h1 className=" m-0 p-0 text-6xl">
                        Une Famille
                    </h1>
                }
            />

        </div>
    )
}
export default Familly
