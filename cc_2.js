let products = ["shirt","pants","jacket","shorts","sweater"];
products.unshift ("skirt");
products.pop();
console.log("Updated Product List:", products);

let scores = [60, 70, 75, 95, 80];
scores[1] = 85;
let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
let average = total / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", average);

let employee = { name: "Anakin Skywalker", age: 25, department: "Jedi", isActive: true};

employee.department = "Sith";
console.log(employee);
