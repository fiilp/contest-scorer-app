import React from "react";
import { Route, Routes } from "react-router-dom";
import ContestPage from "../pages/contest/Contest";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import RatePage from "../pages/rate/Rate";
import AuthRoute from "../utils/auth/authRoute/AuthRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Contest Scorer</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route path="/login" Component={LoginPage} />
        <Route path="/contest/:contestId" Component={ContestPage} />
        <Route
          path="/contest/:contestId/rate/:contestantId"
          Component={RatePage}
        />
      </Routes>
    </div>
  );
}

export default App;
