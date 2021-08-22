const Engineer = require("../lib/Engineer");

test("github equals github", () => {
  const engineer = new Engineer(
    "George",
    "01",
    "george@email.com",
    "George-Git"
  );

  expect(engineer.github).toBe("George-Git");
});

test("getGithub gets github name", () => {
  const engineer = new Engineer(
    "George",
    "01",
    "george@email.com",
    "George-Git"
  );

  expect(engineer.getGithub()).toBe("George-Git");
});

test("getRole gets the role", () => {
  const engineer = new Engineer(
    "George",
    "01",
    "george@email.com",
    "George-Git"
  );

  expect(engineer.getRole()).toBe("Engineer");
});
