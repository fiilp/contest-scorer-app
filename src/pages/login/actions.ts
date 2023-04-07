import { NavigateFunction } from "react-router-dom";
import { backend } from "../../utils/backend/Backend";
import React from "react";

export function handleSubmitFn(
  navigate: NavigateFunction,
  username: string,
  password: string
) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    backend
      .post("/v1/auth/login", { email: username, password: password })
      .then((r) => r.text)
      .then((_) => login(navigate));
  };
}

function login(navigate: NavigateFunction) {
  localStorage.setItem("user-token", "session");
  return navigate("/");
}
