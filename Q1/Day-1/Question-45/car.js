"use strict";
function carInfo(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
console.log(myCar);
