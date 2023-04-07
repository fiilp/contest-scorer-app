import React from "react";
import { Link, useParams } from "react-router-dom";
import Contestant, {
  IContestantProps,
} from "../../utils/components/contestant/Contestant";
import Logout from "../../utils/components/logout/Logout";
import "./Contest.css";

const mock = [
  { id: "1", name: "Filip Garamvölgyi", performance: "Bingo Bongo", score: 5 },
  { id: "2", name: "Hanna Ta", performance: "Slayy", score: 8 },
  {
    id: "3",
    name: "Agnes Garamvölgyi",
    performance: "TNT, nu jävlar blir det åka av",
    score: 7,
  },
  {
    id: "4",
    name: "Adele",
    performance: "Hallå",
    score: 2,
  },
  {
    id: "5",
    name: "Kristoffer",
    performance: "Trasig telefon",
    score: 2,
  },
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
