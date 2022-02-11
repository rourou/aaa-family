import React from 'react'
import Logo from './logo.js'
import Menu from './menu.js'

const Head = (props) => {
    console.log('props:', props)

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