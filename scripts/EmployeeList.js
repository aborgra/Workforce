import { useEmployees } from "./EmployeeProvider.js"
import { useComputers } from "./ComputerProvider.js"
import { useDepartments } from "./DepartmentsProvider.js"
import Employee from "./Employee.js"
import { useLocations } from "./LocationsProvider.js"


const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            const computer = computers.find(computer => computer.id === employee.computerId)
            const department = departments.find(department => department.id === employee.departmentId)
            const location = locations.find(location => location.id === employee.locationId)

            // Get HTML representation of product
            const html = Employee(employee, computer, department, location)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList