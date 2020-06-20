import React, {Fragment} from 'react';
import './public/css/main.scss';

//Components
import Header from './components/Header'
import Welcome from './components/Welcome'
import Main from './components/Main'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Welcome />
            <Main />
        </Fragment>
    );
}

export default App;
