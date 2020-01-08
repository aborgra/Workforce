const Employee = (employee, computer, department, location) => {
  return `
      <section class="product">
          <header>
              <h2>${employee.firstName} ${employee.lastName}</h2>
          </header>
          <div>
              Computer: ${computer.model}
          </div>
          <div>
              Department: ${department.name}
          </div>
          <div>
              Location: ${location.name}
          </div>
      </section>
  `
}

export default Employee