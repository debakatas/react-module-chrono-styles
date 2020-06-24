import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    useTransition,
    animated,
    useSpring,
} from 'react-spring';

import Timer from './Timer';
import Controls from './Controls/index';
import Laps from './Laps';

const StyledMain = styled(animated.main)`
    background: white;
    display: inline-flex;
    flex-grow: 0;
    padding: 2rem;
    border-radius: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledContainer = styled.div`
    position: relative;
`;

const App = () => {
    const [runTime, setRunTime] = useState(0);
    const [time, setTime] = useState(Date.now());
    const [initialTime, setInitialTime] = useState(
        Date.now()
    );
    const [lap, setLap] = useState([]);
    const [go, setGo] = useState(false);

    const updateTime = () => {
        setTime(Date.now());
    };

    const takeLap = (newLap) => {
        setLap((prevLaps) => [...prevLaps, newLap]);
    };

    const transitions = useTransition(!!lap.length, null, {
        from: {
            transform: `transformX(-100%)`,
        },
        enter: {
            transform: 'transformY(0)',
        },
        leave: {
            transform: 'transformX(-100%)',
        },
    });

    const animation = useSpring({
        boxShadow: '10px 10px 20px 2px',
        from: { boxShadow: '-10px -10px 20px 2px' },
    });

    useEffect(() => {
        if (go) {
            setTimeout(() => {
                updateTime();
            }, 100);
        }
    }, [go, time]);

    const currentTime = go
        ? runTime + (time - initialTime) / 1000
        : runTime;

    return (
        <StyledContainer>
            <StyledMain style={animation}>
                <Timer time={currentTime}></Timer>
                <Controls
                    go={go}
                    pause={() => {
                        setGo((b) => {
                            const newTime = Date.now();
                            if (b) {
                                setRunTime(currentTime);
                            } else {
                                setInitialTime(newTime);
                                setTime(newTime);
                            }

                            return !b;
                        });
                    }}
                    takeLap={() => takeLap(currentTime)}
                    restart={() => {
                        const newTime = Date.now();
                        setTime(newTime);
                        setRunTime(0);
                        setInitialTime(newTime);
                        setGo(false);
                        setLap([]);
                    }}
                />
            </StyledMain>
            {transitions.map(({ item, key, props }) => {
                console.log(props);

                return (
                    item && (
                        <animated.div
                            style={props}
                            key={key}
                        >
                            <Laps laps={lap}></Laps>
                        </animated.div>
                    )
                );
            })}
        </StyledContainer>
    );
};

export default App;
