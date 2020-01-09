const CustomerComponent = (customer, relationships) => {
  return `
  
      <section class="customer">
          <header>
              <h2>${customer.name}</h2>
          </header>
          <section class="content">
          <br>
          <div>Related Employees:
          <ul>
          ${relationships.map(employee => `
          <li>${employee.firstName} ${employee.lastName}</li>`)}
          </ul>
          </section>
      </section>
  `
}

export default CustomerComponent