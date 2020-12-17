const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corola"], ["camero"]];

// help with interference when extracing values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with "map"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
// const importantDates = [new Date(), "2020-10-10"];
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100);
