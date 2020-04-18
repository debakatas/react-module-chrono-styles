import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './style/App.module.css';

import Timer from './Timer';
import Controls from './Controls/index';
import Laps from './Laps';

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
        <>
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
            <Laps laps={lap}></Laps>
        </>
    );
};

export default App;
