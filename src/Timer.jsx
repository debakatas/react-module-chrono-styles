import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
    font-size: 4rem;
    width: 200px;
    height: 200px;
    border-radius: ${(props) =>
        props.square ? '0' : '50%'};
    border: 1px solid var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => props.marginBottom || 10}px;

    h1 {
        color: blue;

        span {
            color: yellow;
        }
    }
`;

const Timer = ({ time }) => {
    const [square, setSquare] = React.useState(false);

    return (
        <StyledDiv
            square={square}
            onClick={() => setSquare((b) => !b)}
        >
            {time.toFixed(0)}
        </StyledDiv>
    );
};

export default Timer;
