import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/employees",
        employee
      );

      alert("Employee Added Successfully");
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert("Error adding employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={employee.position}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;