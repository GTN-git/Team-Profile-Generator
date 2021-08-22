const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("George", "01", "george@email.com");

  expect(employee.name).toBe("George");
  expect(employee.id).toBe("01");
  expect(employee.email).toBe("george@email.com");
});

test("getName gets employee name, getId gets employee ID, getEmail gets employee email, getRole gets employee role", () => {
  const employee = new Employee("George", "01", "george@email.com");

  expect(employee.getName()).toBe("George");
  expect(employee.getId()).toBe("01");
  expect(employee.getEmail()).toBe("george@email.com");
  expect(employee.getRole()).toBe("Employee");
});

