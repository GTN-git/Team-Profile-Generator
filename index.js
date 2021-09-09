const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your Manager's name",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your Manager's ID",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your Manager's Email",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your Manager's Office Number",
      },
    ])
    .then((managersAnswers) => {
      const manager = new Manager(
        managersAnswers.managerName,
        managersAnswers.managerId,
        managersAnswers.managerEmail,
        managersAnswers.managerOfficeNumber
      );

      employees.push(manager);
      add();
    });
}

function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's Email",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is your engineer's GitHub",
      },
    ])
    .then((engineersAnswers) => {
      const engineer = new Engineer(
        engineersAnswers.engineerName,
        engineersAnswers.engineerId,
        engineersAnswers.engineerEmail,
        engineersAnswers.engineerGitHub
      );

      employees.push(engineer);
      add();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's Email",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school did the intern go to",
      },
    ])
    .then((internsAnswers) => {
      const intern = new Intern(
        internsAnswers.internName,
        internsAnswers.internId,
        internsAnswers.internEmail,
        internsAnswers.internSchool
      );

      employees.push(intern);
      add();
    });
}

function generateHTML() {
  const htmlString = generatePage(employees);
  fs.writeFileSync("./dist/index.html", htmlString);
}

function add() {
  inquirer
    .prompt({
      type: "list",
      name: "add",
      message: "do you want to add another engineer or intern or none",
      choices: ["Engineer", "Intern", "None"],
    })
    .then((addAnswers) => {
      if (addAnswers.add === "Intern") {
        intern();
      } else if (addAnswers.add === "Engineer") {
        engineer();
      } else if (addAnswers.add === "None") {
        generateHTML();
      }
    });
}

//if statement addAnswers.add (intern, etc run the next) otherwise push array to generate HTML

init();
