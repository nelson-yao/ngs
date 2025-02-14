// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
    label: 'circle',
    radius: 2,
    precision: 4,
};

const circleArea = ({ radius }, { precision = 3} = {}) => 
    (PI * radius * radius).toFixed(precision);


console.log(circleArea(circle, circle));


