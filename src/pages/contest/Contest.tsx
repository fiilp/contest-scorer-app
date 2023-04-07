import React from "react";
import { Link, useParams } from "react-router-dom";
import Contestant, {
  IContestantProps,
} from "../../utils/components/contestant/Contestant";
import Logout from "../../utils/components/logout/Logout";
import "./Contest.css";

const mock = [
  { id: "1", name: "Filip Garamvölgyi", performance: "Bingo Bongo", score: 5 },
  { id: "2", name: "Hanna Ta", performance: "Lik väl", score: 8 },
] as IContestantProps[];

function ContestPage() {
  const { contestId } = useParams();
  return (
    <div className="Contest">
      <Link to="/">Home</Link>
      {mock.map((e) => (
        <Link key={e.id} to={`/contest/${contestId}/rate/${e.id}`}>
          <Contestant key={e.id} {...e} />
        </Link>
      ))}
      <Logout />
    </div>
  );
}

export default ContestPage;
