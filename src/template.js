const Engineer = require("../lib/Engineer");

const generateManager = (manager) => {
  return `<div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-coffee"></i>Manager</h5>
              <h6 class="card-subtitle mb-2 text-muted">${manager.getName()}</h6>
              <p class="card-text" id="ID">${manager.getId()}</p>
              <a href="mailto:${manager.getEmail()}" class="card-text" id="Email">${manager.getEmail()}</a>
              <p class="card-text" id="Office">${manager.getOfficeNumber()}</p>
            </div>
          </div>`;
};

const generateEngineer = (engineer) => {
  return `<div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-glasses"></i>Engineer
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">${engineer.getName()}</h6>
              <p class="card-text" id="ID">${engineer.getId()}</p>
              <a href="mailto:${engineer.getEmail()}" class="card-text" id="Email">${engineer.getEmail()}</a>
              <a href="https://github.com/${engineer.getGithub()}" class="card-text" id="github">${engineer.getGithub()}</a>
            </div>
          </div>`;
};

const generateIntern = (intern) => {
  return `<div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-graduation-cap"></i>Intern
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">${intern.getName()}</h6>
              <p class="card-text" id="ID">${intern.getId()}</p>
              <a href="mailto:${intern.getEmail()}" class="card-text" id="Email">${intern.getEmail()}</a>
              <p class="card-text" id="school">${intern.getSchool()}</p>
            </div>
          </div>`;
};

module.exports = (employees) => {
  let employeeCards = "";
  for (let i = 1; i < employees.length; i++) {
    if (employees[i].getRole() === "Engineer") {
      employeeCards += generateEngineer(employees[i]);
    } else if (employees[i].getRole() === "Intern") {
      employeeCards += generateIntern(employees[i]);
    }
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
      <link
        rel="stylesheet"
        href="https:cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-12" id="header">Employees</div>
            <div class="col-12" id="cards">
              ${generateManager(employees[0])}
              ${employeeCards}
            </div>
          </div>
        </div>
      </header>
    </body>
  </html>
  
`;
};
