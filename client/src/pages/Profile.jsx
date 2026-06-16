import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Profile</h1>

      {user && (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;