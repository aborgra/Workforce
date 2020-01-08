import { getEmployees } from "./EmployeeProvider.js";
import { getComputers } from "./ComputerProvider.js";
import EmployeeList from "./EmployeeList.js";
import { getDepartments } from "./DepartmentsProvider.js";
import { getLocations } from "./LocationsProvider.js";


getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(EmployeeList)