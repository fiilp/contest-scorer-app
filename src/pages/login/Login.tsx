import { useNavigate } from "react-router-dom";
import { handleSubmitFn } from "./actions";
import "./Login.css";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <main>
        <h2>Login</h2>
        <form onSubmit={handleSubmitFn(navigate, username, password)}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username..."
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUsername(e.currentTarget.value)
            }
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
          />
          <input type="submit" value="Login" />
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
