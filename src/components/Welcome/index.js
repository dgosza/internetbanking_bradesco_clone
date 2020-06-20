import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Container } from '@material-ui/core'

const Welcome = () => (
    <div className="Welcome">
        <Container md={12}>
            <p className="welcome">Bem vindo, Diego ;)</p>
            <p className="date">Segunda feira, 18 de Outubro</p>
        </Container>

    </div>
)

export default Welcome;