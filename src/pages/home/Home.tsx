import React from "react";
import ContestLink, {
  IContestLinkProps,
} from "../../utils/components/contestLink/ContestLink";
import Logout from "../../utils/components/logout/Logout";
import "./Home.css";

const mock = [
  { id: "abc", name: "Mellodfestivalen 22/03/01" },
  { id: "cde", name: "Eurovision 2014" },
  { id: "fgh", name: "Super Awesome Eurovision" },
] as IContestLinkProps[];

function HomePage() {
  return (
    <div className="Home">
      {mock.map((e) => (
        <ContestLink key={e.id} {...e} />
      ))}
      <Logout />
    </div>
  );
}

export default HomePage;
