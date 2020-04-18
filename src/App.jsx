import React from 'react';
import styled from 'styled-components';
import styles from './style/App.module.css';

const StyledDiv = styled.div`
    transform: rotate(5deg);
`;

const App = () => (
    <StyledDiv
        className={`${styles.big} globalClassname`}
        style={{ textTransform: 'uppercase' }}
    >
        Chrono
    </StyledDiv>
);

export default App;
