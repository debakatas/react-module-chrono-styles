import React from 'react';

const Laps = ({ laps }) => (
    <ul
        style={{
            color: '#7d8b8b',
        }}
    >
        {laps.map((lap, index) => {
            const lapFormat = lap.toFixed(2);
            const lapCounter = `[${String(
                index + 1
            ).padStart(2, '0')}]`;

            return (
                <li
                    style={{
                        opacity: (index + 1) / 10,
                        listStyle: 'none',
                        marginBottom: 10,
                    }}
                >
                    {lapCounter} {lapFormat}
                </li>
            );
        })}
    </ul>
);

export default Laps;
