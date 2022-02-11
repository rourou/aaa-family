import React from 'react'
import Logo from './logo.js'
import Menu from './menu.js'

const Head = (props) => {

    return (
        <React.Fragment>
            <div>
                <Logo />
                <Menu />
            </div>
        </React.Fragment>
    )
}

export default Head 