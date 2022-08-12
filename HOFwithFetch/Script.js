fetch(`data.json`)
  .then((response) => response.json())
  .then((result) => {
    main(result);
  });

function main(employees) {
  // 1. Finding and printing average salary of all employees who works in Georgia, Amazon company.
  let filteredSalaries = employees
    .filter((e) => e.country === "Georgia" && e.company === "Amazon")
    .map((e) => e.salary);
  console.log(filteredSalaries);
  const sum = filteredSalaries.reduce((accum, next) => next + accum, 0);
  console.log("1: " + Math.round(sum / filteredSalaries.length));

  // 2. Finding and printing list of the employees which work in Facebook IT department.
  const list2 = employees.filter(
    (e) => e.company === "Facebook" && e.department === "IT"
  );
  console.log("2: ", list2);

  // 3. Finding and printing boolean value if there exists employees which work in India HR department and whose salary is above 500 000
  const result3 = employees.some(
    (e) => e.country === "India" && e.department === "HR" && e.salary > 500000
  );
  console.log("3 ", result3);

  // 4. Geting and printing a list of employees with only email, firstname and dob of the employees which work in Google UK Sales department.
  const result4 = employees
    .filter(
      (e) =>
        e.company === "Google" && e.country === "Uk" && e.department === "Sales"
    )
    .map((e) => ({ name: e.name, salary: e.salary }));
  console.log("4 ", result4);

  // 5. Finding and printing an employee which has highest salary among those employees which work in either Google or Apple and are born after 1980.
  const result5 = employees
    .filter((e) => e.company === "Google" || e.company === "Apple")
    .sort((a, b) => b.salary - a.salary)[0];

  console.log("5: ", result5);

  // 7. Sorting and printing employees in alphabetical order by firstname
  const result7 = employees.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name === b.name) return 0;
    return 1;
  });
  console.log("7: ", result7);

  // 8. Checking if there exists and employee in Google which has salary over 600 000 and is born after 1990.
  const result8 = employees.some(
    (e) => e.company === "Google" && e.salary > 600000
  );

  console.log("8: ", result8);

  // 9. Finding and printing sum of salaries of the users which work in USA Apple.
  const result9 = employees
    .filter((e) => e.company === "Facebook" && e.country === "USA")
    .map((e) => e.salary)
    .reduce((accum, next) => next + accum);

  console.log("9: ", result9);
}
