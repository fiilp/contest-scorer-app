import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user-token");
    return navigate("/login");
  };

  return (
    <div className="Logout">
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Logout;
