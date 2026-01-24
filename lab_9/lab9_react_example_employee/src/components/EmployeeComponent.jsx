import React, {useState, useEffect} from 'react'

function EmployeeComponent() {

    const [employees, setEmployees] = useState([])

    const getEmployees = () => {

        setEmployees([
            {
               "id":1,
               "firstName":"sidra",
               "lastName":"shafi",
               "email":"sidra@gmail.com"
            },
            {
               "id":2,
               "firstName":"waseem",
               "lastName":"akram",
               "email":"waseem@gmail.com"
            },
            {
               "id":3,
               "firstName":"Diana",
               "lastName":"James",
               "email":"Diana@gmail.com"
            }
         ])
    };

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className = "container">
            
            <h3 className = "text-center"> Employees List</h3>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee First Name</th>
                        <th> Employee Last</th>
                        <th> Employee Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id }</td>
                                    <td> {employee.firstName }</td>
                                    <td> {employee.lastName }</td>    
                                    <td> {employee.email }</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default EmployeeComponent;