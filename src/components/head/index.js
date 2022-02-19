import React from 'react'
import Logo from './logo.js'
import Menu from './menu.js'

const Head = (props) => {

    return (
        <React.Fragment>
            <div>
                <Logo />
                <Menu />
                <div className='flex justify-content-end'>
                    <h6 className='p-0 m-0'>Mis a jour il y à {props.maj} heures</h6>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Head 