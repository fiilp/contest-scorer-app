export const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8089"
    : "https://contest-scorer.herokuapp.com";
