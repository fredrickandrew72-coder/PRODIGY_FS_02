import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/employees"
      );
      setEmployees(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/employees/${id}`
      );

      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      <Link to="/add-employee">
        <button>Add Employee</button>
      </Link>

      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>

              <td>
                <Link
                  to={`/edit-employee/${emp._id}`}
                >
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() =>
                    deleteEmployee(emp._id)
                  }
                  style={{ marginLeft: "5px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;