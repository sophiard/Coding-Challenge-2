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

let customers = [{ name: "Luke Skywalker", email: "luke@gmail.com", purchaseAmount: 1600 },
     { name: "Leia Organa", email: "leia@gmail.com", purchaseAmount: 4500 },
    { name: "Han Solo", email: "han@gmail.com", purchaseAmount: 1000 }];

customers.push({ name: "Darth Vader", email: "vader@gmail.com", purchaseAmount: 9000 });

console.log(customers);
