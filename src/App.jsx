import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './style/App.module.css';

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
            <div>{currentTime.toFixed(2)}</div>
            <button
                type="button"
                onClick={() => {
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
            >
                {go ? 'Parar' : 'comenzar'}
            </button>
            <button
                type="button"
                onClick={() => takeLap(currentTime)}
            >
                take lap
            </button>
            <button
                type="button"
                onClick={() => {
                    const newTime = Date.now();
                    setTime(newTime);
                    setRunTime(0);
                    setInitialTime(newTime);
                    setGo(false);
                    setLap([]);
                }}
            >
                restart
            </button>
            {lap.map((l) => (
                <div style={{ marginRight: 20 }}>
                    {l.toFixed(2)}
                    <br />
                </div>
            ))}
        </>
    );
};

export default App;
