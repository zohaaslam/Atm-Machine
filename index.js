#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct your pin code!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "what you want to do?",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAnswer.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("Your current balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect your pin code,please try again");
}
