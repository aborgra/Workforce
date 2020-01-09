import { useEmployees } from "./EmployeeProvider.js"

import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import { useCustomers } from "./CustomerProvider.js"
import  CustomerComponent  from "./Customer.js";


const contentTarget = document.querySelector(".customers")
export const CustomerList = () => {

    const employees = useEmployees()
  
    const customerRelationships = useEmployeeCustomers()
    const customers = useCustomers()

    const render = () => {
        contentTarget.innerHTML = customers.map(customer => {

          let relationships = customerRelationships.filter(cr => cr.customerId === customer.id)

          relationships = relationships.map(relationship => {
            return employees.find(employee => employee.id === relationship.employeeId)
          })


        

            // Get HTML representation of product
            const html = CustomerComponent(customer, relationships)

            return html
        }).join("")
    }

    render()
}

export default CustomerList