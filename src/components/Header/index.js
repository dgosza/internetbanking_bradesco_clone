import React from 'react';
import '../../public/css/main.scss'

import pathLogo from '../../public/images/bradesco.png'

//Material
import { Container, Grid } from '@material-ui/core';

//icons
import { MdExitToApp as Exit } from 'react-icons/md'

const Header = () => (
    <div className="Header">
        <Container maxWidth="lg">
            <Grid container>
                <Grid item sm="3" md="3" className="contentHeader">
                    <img src={pathLogo} alt="Logo Bradesco"></img>
                    <p align="center" className="internetBanking">Internet Banking</p>
                </Grid>

                <Grid item sm="9" md="9" align="right">
                    <Exit size={30} className="icon" />
                </Grid>
            </Grid>
        </Container>
    </div>
)

export default Header;