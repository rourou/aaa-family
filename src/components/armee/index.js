import React from "react";

const Armee = (props) => {

    return (
        <React.Fragment>
            <div>
                <h1>
                    {props.clan.name}
                </h1>
                <h2>
                    {props.clan.tag}
                </h2>
            </div>
        </React.Fragment>
    )
}
export default Armee