#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 500000;
let myPin = 4567;
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "enter your pin",
    },
]);
if (pinAnswer.pin === myPin)
    console.log("correct pin code");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "check balance"],
    },
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        },
    ]);
    myBalance -= amountAns.amount;
    console.log(`your reamaing balance is` + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
    let pastCash = await inquirer.prompt([
        {
            name: "past cash",
            message: "select one option",
            type: "list",
            choices: ["10000", "30000", "50000"],
        },
    ]);
    console.log(pastCash);
}
else {
    console.log("you enter incorrect pin try again");
}
