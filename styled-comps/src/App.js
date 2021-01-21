import React from 'react';
import style from 'styled-components';
import Button from './conponents/Button';


const MainWrapper = style.section `
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const App = () => {
    return (
    <div>
        <MainWrapper>
            <Button primary>My Primary Button</Button>
            <Button>My Button</Button>
            <Button secondary>My Button</Button>
        </MainWrapper>
    </div>
    );
};

export default App;