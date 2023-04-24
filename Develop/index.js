// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (value) => { 
            if (value) {
                return true;
            } else {
                return "I need a value to continue"
            } 
                
        } 
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your assignment? What was your motivation for this assignment and what did you learn?",
        validate: (value) => { 
            if (value) {
                return true;
            } else {
                return "I need a value to continue"
            } 
                
        } 
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions on how your application should be used."
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "GPLv3", "Apache", "Perl", "N/A"],
        message: "Which license would be used in your application?",
        validate: (value) => { 
            if (value) {
                return true;
            } else {
                return "I need a value to continue"
            } 
                
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Would you like other developers to contribute, and if so, how can they contribute to your application?"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run your tests."
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
        validate: (value) => { 
            if (value) {
                return true;
            } else {
                return "I need a value to continue"
            } 
                
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md`, data, (err) => 
        err ? console.log(err) : console.log("Successfully created README.md!"))
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const readMeTemplate = generateMarkdown(data);

            writeToFile(data.title, readMeTemplate)
        });
    
}

// Function call to initialize app
init();
