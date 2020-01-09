const Employee = (employee, computer, department, location, relationships) => {
  return `
      <section class="employee">
          <header>
              <h2>${employee.firstName} ${employee.lastName}</h2>
          </header>
          <section class="content">
          <div>
              Computer: ${computer.model}
          </div>
          <div>
              Department: ${department.name}
          </div>
          <div>
              Location: ${location.name}
          </div>
          <br>
          <div>Related Customers:
          <ul class="employeeCustomerRelationship">
          ${relationships.map(customer => `
          <li>${customer.name}</li>`).join("")}
          </ul>
          </section>
      </section>
  `
}

export default Employee