import React from 'react';
import classNames from './style/Laps.module.css';

const Laps = ({ laps }) => (
    <ul className={classNames.container}>
        {laps.map((lap, index) => {
            const lapFormat = lap.toFixed(2);
            const lapCounter = `[${String(
                index + 1
            ).padStart(2, '0')}]`;

            return (
                <li
                    className={classNames.element}
                    style={{
                        opacity: (index + 1) / 10,
                    }}
                >
                    {lapCounter} {lapFormat}
                </li>
            );
        })}
    </ul>
);

export default Laps;
