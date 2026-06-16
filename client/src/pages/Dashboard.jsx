import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management System</h1>

      <Link to="/employees">
        <button>View Employees</button>
      </Link>

      <Link to="/add-employee">
        <button style={{ marginLeft: "10px" }}>
          Add Employee
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;