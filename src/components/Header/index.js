import React from 'react';
import '../../public/css/main.scss'

import pathLogo from '../../public/images/bradesco.png'

//icons
import { MdExitToApp as Exit } from 'react-icons/md'

const Header = () => (
    <div className="Header">

        <div className="container">
            <div className="logo">
                <img src={pathLogo} alt="Logo Bradesco"></img>
                <p align="center" className="internetBanking">Internet Banking</p>
            </div>

            <div className="rightSide">

                <Exit size={30} className="icon" />

            </div>
        </div>


    </div>
)

export default Header;