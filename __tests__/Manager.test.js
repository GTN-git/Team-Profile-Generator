const Manager = require("../lib/Manager");

test("officeNumber equals officeNumber", () => {
  const manager = new Manager(
    "George",
    "01",
    "george@email.com",
    "01"
  );

  expect(manager.officeNumber).toBe("01");
});

test("getOfficeNumber gets officeNumber name", () => {
  const manager = new Manager(
    "George",
    "01",
    "george@email.com",
    "01"
  );

  expect(manager.getOfficeNumber()).toBe("01");
});

test("getRole gets the role", () => {
  const manager = new Manager(
    "George",
    "01",
    "george@email.com",
    "01"
  );

  expect(manager.getRole()).toBe("Manager");
});
