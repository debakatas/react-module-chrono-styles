import React from 'react';

const Laps = ({ laps }) => (
    <ul>
        {laps.map((lap) => (
            <li>{lap}</li>
        ))}
    </ul>
);

export default Laps;
