


function carInfo(manufacturer: string, model: string, ...options: [string, any][]) {
    const car: {[key: string]: any} = { manufacturer, model };


    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  const myCar = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
  console.log(myCar);
  