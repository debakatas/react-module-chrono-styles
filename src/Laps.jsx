import React from 'react';
import styled from 'styled-components';
import formatNumber from './format-number';

const StyledUl = styled.ul`
    height: 200px;
    overflow-y: auto;
    color: white;
    width: 150px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(100%) translateY(-50%);
    background: var(--purple);
    padding: 2rem 1rem;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
`;

const StyledLi = styled.li`
    list-style: none;
    margin-bottom: 0.5rem;
    opacity: ${(props) => (props.index + 1) / 10};
`;

const Laps = ({ laps }) => (
    <StyledUl>
        {laps.map((lap, index) => {
            const lapFormat = lap.toFixed(2);
            const lapCounter = `[${formatNumber(
                index + 1
            )}]`;

            return (
                <StyledLi index={index}>
                    {lapCounter} {lapFormat}
                </StyledLi>
            );
        })}
    </StyledUl>
);

export default Laps;
