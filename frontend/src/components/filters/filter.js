import React from "react";
import { useState, useEffect } from "react";
import { Slider } from '@mantine/core';

import { useState } from 'react';
import { Slider, RangeSlider } from '@mantine/core';

function price() {
    const [value, setValue] = useState(0);
    const [rangeValue, setRangeValue] = useState<[number, number]>([500, 2000]);

    return (
        <>
        <h1>Price</h1>
        <Slider value={value} onChange={setValue} />
        <RangeSlider value={rangeValue} onChange={setRangeValue} />
        </>
    );
}

function proximity() {
    const [value, setValue] = useState(0);
    const [rangeValue, setRangeValue] = useState<[number, number]>([0.1, 10]);

    return (
        <>
        <h1>Proximity</h1>
        <Slider value={value} onChange={setValue} />
        <RangeSlider value={rangeValue} onChange={setRangeValue} />
        </>
    );
}

export default function filters() {
    return (
        <div id = 'filter'>
            <h1>{price}</h1>
            <h1>{proximity}</h1>
            <h1>Bed/Bath</h1>
            <h1>Amenities</h1>
            <h1>Services</h1>
            <h1>Financials</h1>
        </div>
    )

}
