const Intern = require("../lib/Intern");

test("school equals school", () => {
  const intern = new Intern(
    "George",
    "01",
    "george@email.com",
    "UCR"
  );

  expect(intern.school).toBe("UCR");
});

test("getSchool gets school name", () => {
  const intern = new Intern(
    "George",
    "01",
    "george@email.com",
    "UCR"
  );

  expect(intern.getSchool()).toBe("UCR");
});

test("getRole gets the role", () => {
  const intern = new Intern(
    "George",
    "01",
    "george@email.com",
    "UCR"
  );

  expect(intern.getRole()).toBe("Intern");
});
