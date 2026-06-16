import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/employees/${id}`
      );

      setEmployee(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching employee");
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/employees/${id}`,
        employee
      );

      alert("Employee Updated Successfully");
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert("Error updating employee");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
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
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;