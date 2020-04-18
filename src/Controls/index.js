import React from 'react';

import controlsClass from './style.module.css';

const Controls = ({ pause, takeLap, restart, go }) => (
    <div className={controlsClass.container}>
        <button
            type="button"
            onClick={pause}
            className={controlsClass.button}
        >
            {go ? 'Pause' : 'Start'}
        </button>
        <button
            className={controlsClass.button}
            type="button"
            onClick={takeLap}
        >
            Take lap
        </button>
        <button
            className={controlsClass.button}
            type="button"
            onClick={restart}
        >
            Restart
        </button>
    </div>
);

export default Controls;
