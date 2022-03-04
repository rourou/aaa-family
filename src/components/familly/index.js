import { TabView, TabPanel } from 'primereact/tabview';
import React from "react";
import { Card } from "primereact/card";
import { Tag } from 'primereact/tag';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { ProgressSpinner } from 'primereact/progressspinner';

const Familly = (props) => {

    const [clanSelect, setClanSelect] = React.useState(null)
    const [clans, setClans] = React.useState([])
    const [activeIndex, setActiveIndex] = React.useState(0);

    //React.useEffect(() => {
    //    setClans([])
    //}, [props])

    const tradRole = {
        coLeader: "Chef Adjoint",
        member: "Membre",
        admin: "Aîné",
        leader: "Chef"
    }

    React.useEffect(() => {
        if (clans.length > 0) {
            setClans([])
        } else {
            for (let clan in props.clans) {
                if (clan !== "Maj") {
                    clans.push(props.clans[clan])
                }
            }
            setClanSelect(clans[0])
        }
    }, [props.clans, clans])

    const viewClan = () => {
        return (
            <React.Fragment>
                {
                    clanSelect &&
                    <Card className="p-1">
                        <div className="flex justify-content-start flex-wrap align-content-center align-items-end">
                            <img
                                alt={`ecusson clan ${clanSelect.name}`}
                                src={clanSelect.badgeUrls.small}
                                className="p-0 mr-2"
                            />
                            <h1>{clanSelect.name}</h1>
                            <Tag
                                className="m-1 text-sm ml-2"
                                value={clanSelect.tag}
                            />
                        </div>
                        <div>
                            <h2>Description</h2>
                            <p>
                                {clanSelect.description}
                            </p>
                        </div>
                        <div>
                            <Accordion>
                                <AccordionTab header={`Les Membres ( ${clanSelect.members}/50 )`}>
                                    {
                                        Object.keys(clanSelect.memberList).map((member, i) =>
                                            <Card key={i} className='p-0 m-1'>
                                                <div className="p-0 flex justify-content-start flex-wrap align-content-center align-items-end">
                                                    {
                                                        clanSelect.memberList[member].league !== undefined &&
                                                        <img
                                                            alt={`ecusson league ${member}`}
                                                            src={clanSelect.memberList[member].league.iconUrls.tiny}
                                                            className="p-0"
                                                        />
                                                    }
                                                    <h4 className="m-2 p-0">{clanSelect.memberList[member].name}</h4>
                                                    <h5 className="m-2 p-0">({tradRole[clanSelect.memberList[member].role]})</h5>
                                                    <Tag
                                                        className="m-1 text-sm"
                                                        rounded
                                                        severity="info"
                                                        value={`exp ${clanSelect.memberList[member].expLevel}`}
                                                    />
                                                    <Tag
                                                        className="m-1 text-sm"
                                                        rounded
                                                        value={clanSelect.memberList[member].tag}
                                                    />
                                                </div>
                                                <div className="flex m-1 p-0">
                                                    <span className="flex m-1 p-0">
                                                        {clanSelect.memberList[member].trophies} trophés
                                                    </span>
                                                    <span className="flex m-1 p-0">
                                                        HDV: {clanSelect.memberList[member].townHallLevel}
                                                    </span>
                                                    <span className="flex m-1 p-0">
                                                        {clanSelect.memberList[member].donations} dons
                                                    </span>
                                                </div>
                                            </Card>

                                        )
                                    }
                                </AccordionTab>
                            </Accordion>
                        </div >
                    </Card>
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="block text-center justify-content-center">
                <img
                    alt="logo"
                    height="100px"
                    className="mt-3 mb-0"
                    src="./img/logo.png"
                />

                {
                    clans.length > 0 ?
                        <div>
                            <h1 className=" m-0 p-0 text-4xl">
                                Une Famille
                            </h1>
                            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                                {
                                    clans.map((clan, i) =>
                                        <TabPanel
                                            key={clan.name}
                                            header={`${clan.name}`}
                                            headerTemplate={
                                                <div className="flex align-items-center px-3" style={{ cursor: 'pointer' }} onClick={() => setClanSelect(clan)}>
                                                    <Avatar image={clan.badgeUrls.medium} onImageError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} shape="circle" className="mx-2" />
                                                    <h4>{clan.name}</h4>
                                                </div>
                                            }
                                        >
                                            {viewClan(clan)}
                                        </TabPanel>
                                    )
                                }
                            </TabView >
                        </div>
                        :
                        <div>
                            <h1 className=" m-0 p-0 text-4xl">
                                Recuperation de la famille en cours
                            </h1>
                            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                        </div>
                }
            </div >
        </React.Fragment >
    )
}
export default Familly
