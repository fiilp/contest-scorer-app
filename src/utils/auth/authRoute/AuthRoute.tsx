import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AuthRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  }, [isLoggedIn, navigate]);
  return <React.Fragment>{isLoggedIn ? children : null}</React.Fragment>;
}
export default AuthRoute;
