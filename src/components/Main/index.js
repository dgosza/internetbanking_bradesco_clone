import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Container, Grid } from '@material-ui/core'

//Components
import QuickAccess from './QuickAccess'

const Main = () => (
    <div className="Main">
        <Container md={12}>
            <Grid container spacing={2}>

                <Grid item md="3" >
                    <div className="leftBar">
                        <p>oi</p>
                    </div>
                </Grid>

                <Grid item md="9">
                    <div className="QuickAccess">
                        <p>oi</p>
                    </div>
                </Grid>
            </Grid>
        </Container>

    </div>
)

export default Main;