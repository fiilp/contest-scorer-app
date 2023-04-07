import React from "react";
import { Link } from "react-router-dom";
import trophy from "./../../../imgs/trophy.svg";
import "./ContestLink.css";

export interface IContestLinkProps {
  id: string;
  name: string;
}

function ContestLink({ id, name }: IContestLinkProps) {
  return (
    <div className="ContestLink">
      <img src={trophy} alt="Trophy" />
      <div>
        <Link to={`/contest/${id}`}>{name}</Link>
      </div>
    </div>
  );
}

export default ContestLink;
