const data = [
  {
    id: 1,
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    engineSize: 1000,
    topSpeed: 186,
    features: [
      "ABS",
      "Quick Shifter",
      "LED Headlights",
      "Adjustable Suspension",
      "Riding Modes",
    ],
    price: 15000,
  },
  {
    id: 2,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    year: 2021,
    color: "Black",
    engineSize: 883,
    topSpeed: 110,
    features: [
      "Cruiser Style",
      "Belt Drive",
      "Forward Controls",
      "Custom Exhaust",
    ],
    price: 9999,
  },
  {
    id: 3,
    brand: "Kawasaki",
    model: "Ninja ZX-6R",
    year: 2023,
    color: "Green",
    engineSize: 636,
    topSpeed: 156,
    features: [
      "Quick Shifter",
      "Traction Control",
      "Slipper Clutch",
      "Adjustable Windscreen",
    ],
    price: 12000,
  },
  {
    id: 4,
    brand: "Yamaha",
    model: "MT-09",
    year: 2022,
    color: "Blue",
    engineSize: 847,
    topSpeed: 135,
    features: [
      "Naked Bike Design",
      "TFT Display",
      "Quick Shifter",
      "Adjustable Suspension",
    ],
    price: 11000,
  },
  {
    id: 5,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    color: "Yellow",
    engineSize: 1103,
    topSpeed: 211,
    features: [
      "Ohlins Suspension",
      "Brembo Brakes",
      "Power Modes",
      "Quick Shifter",
    ],
    price: 25000,
  },
  {
    id: 6,
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    color: "White",
    engineSize: 999,
    topSpeed: 186,
    features: [
      "Dynamic Traction Control",
      "Launch Control",
      "Up/Down Quick Shifter",
      "Adjustable Riding Modes",
    ],
    price: 18000,
  },
  {
    id: 7,
    brand: "Suzuki",
    model: "GSX-R750",
    year: 2022,
    color: "Black/Blue",
    engineSize: 750,
    topSpeed: 165,
    features: [
      "Race-Ready Design",
      "Brembo Monobloc Calipers",
      "Quick Shifter",
      "Traction Control",
    ],
    price: 13000,
  },
  {
    id: 8,
    brand: "Indian",
    model: "Chieftain",
    year: 2023,
    color: "Brown",
    engineSize: 1811,
    topSpeed: 115,
    features: [
      "Touring Bike",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Keyless Ignition",
    ],
    price: 22000,
  },
  {
    id: 9,
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2022,
    color: "Silver",
    engineSize: 765,
    topSpeed: 166,
    features: [
      "Brembo Brakes",
      "Quick Shifter",
      "Adjustable Suspension",
      "Triumph Shift Assist",
    ],
    price: 14000,
  },
  {
    id: 10,
    brand: "Aprilia",
    model: "Tuono V4 1100",
    year: 2024,
    color: "Red",
    engineSize: 1077,
    topSpeed: 175,
    features: [
      "Semi-Active Suspension",
      "Cornering ABS",
      "Quick Shifter",
      "Ride-By-Wire Throttle",
    ],
    price: 19000,
  },
];
function getMotorcycles() {
  return data;
}
function getMotorcycle(id) {
  return data.find((d) => d.id === id);
}

//Extract the brand, model, and year properties from the first motorcycle
//const { brand, model, year } = data[0];
//console.log(brand, model, year);

//Extract the brand, color, and topSpeed properties from the third motorcycle.
//const { brand, color, topSpeed } = data[2];
//console.log(brand, color, topSpeed);

//Extract the model, engineSize, and price properties from the fifth motorcycle.
//const { model, engineSize, price } = data[4];
//console.log(model, engineSize, price);

//Extract the first and second features from the last motorcycle.
//const [firstFeature, secondFeature] = data[data.length - 1].features;
//console.log(firstFeature, secondFeature);

//Using the rest operator, extract the remaining features of the last motorcycle.
//const [, , , ...remainingFeatures] = data[data.length - 1].features;
//console.log(remainingFeatures);

//Using the spread operator, add a new feature, "GPS Navigation" to the first motorcycle.
//data[0] = { ...data[0], features: [...data[0].features, "GPS Navigation"] };
//console.log(data[0]);
//or
//const updatedFirstMotorcycle = {
// ...data[0],
//features: [...data[0].features, "GPS Navigation"],
//};
//console.log(updatedFirstMotorcycle);

//Using the spread operator, add new property type "Sports Bike" to the fifth motorcycle.
//const updatedFifthMotorcycle = { ...data[4], type: "Sports Bike" };
//console.log(updatedFifthMotorcycle);

//Using the spread operator, increase the top speed by 10 mph and set the color to black of the third motorcycle.
//const updatedThirdMotorcycle = {
//...data[2],
//topSpeed: data[2].topSpeed + 10,
//color: "Black",
//};
//console.log(updatedThirdMotorcycle);

// Modify the price property for each motorcycle in the array. If the year is 2022, increase the price by 5%; otherwise, decrease it by 3%.
//const updatedPrices = data.map((motorcycle) => ({
//...motorcycle,
//price:
//motorcycle.year === 2022
//? motorcycle.price * 1.05
//: motorcycle.price * 0.97,
//}));
//console.log(updatedPrices);

//Update a motorcycle where a discounted property is added. If the price exceeds $15,000, set discounted to true; otherwise, set it to false.
//const updatedDiscounts = data.map((motorcycle) => ({
//...motorcycle,
//discounted: motorcycle.price > 15000,
//}));
//console.log(updatedDiscounts);

//Convert the following functions to arrow functions

//11
//const addArrow = (a, b) => a + b;
//console.log("Addition (arrow function):", addArrow(5, 7));

//12
//const greetArrow = (name) => `Hello, ${name}!`;
//console.log("Greeting (arrow function):", greetArrow("Aguerro"));

//13
//const squareArrow = (x) => x * x;
//console.log("Square (arrow function):", squareArrow(10));

//14-15
//const multiplyAndAddArrow = (a, b, c) => a * b + c;
//console.log(
//"Multiplication and addition (arrow function):",
//multiplyAndAddArrow(3, 4, 5)
//);
