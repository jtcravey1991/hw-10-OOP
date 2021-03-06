const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

run();

// main function
async function run() {
    let cont = true;
    const employees = [];

    //while loop which gathers employees until the user is finished
    while (cont === true) {
        const employeeType = await inquirer.prompt({
            type: "list",
            name: "employeeType",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "Manager"]
        })
        const newEmployee = generateEmployee(employeeType.employeeType, await inquirer.prompt(generateQuestions(employeeType.employeeType)));
        employees.push(newEmployee);

        const userCont = await inquirer.prompt({
            type: "confirm",
            name: "cont",
            message: "Would you like to add another employee?"
        })
        cont = userCont.cont;
    }

    const HTML = render(employees);

    //checks if filepath exists, and creates it if it doesnt
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFile(outputPath, HTML, err => {
        if (err) {
            throw err;
        }
        console.log("File Created!")
    });
}

// takes data from inquirer and creates a new object using our employee subclasses
function generateEmployee(employeeType, data) {
    let newEmployee;
    
    switch (employeeType) {
        case "Engineer":
            newEmployee = new Engineer(data.name, data.id, data.email, data.github);
            break;
        case "Intern":
            newEmployee = new Intern(data.name, data.id, data.email, data.school);
            break;
        case "Manager":
            newEmployee = new Manager(data.name, data.id, data.email, data.officeNumber);
            break;
    }

    return newEmployee;
}

// uses role argument to genereate the questions for each type of employee
function generateQuestions(employeeType) {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "Enter the employee's name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee's id number: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employee's email address: "
        }
    ]

    switch (employeeType) {
        case "Engineer":
            questions.push({
                type: "input",
                name: "github",
                message: "Enter the engineer's GitHub account name: "
            });
            break;
        case "Intern":
            questions.push({
                type: "input",
                name: "school",
                message: "Enter the intern's school: "
            });
            break;
        case "Manager":
            questions.push({
                type: "input",
                name: "officeNumber",
                message: "Enter the manager's office number: "
            });
    }

    return questions;
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
