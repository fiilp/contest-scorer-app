import React from "react";
import "./Contestant.css";

export interface IContestantProps {
  id: string;
  name: string;
  performance: string;
  score?: number;
  avatar?: string;
}

function Contestant({
  id,
  name,
  performance,
  score,
  avatar,
}: IContestantProps) {
  return (
    <div className="Contestant">
      <div>
        <div>
          <Avatar avatar={avatar} />
        </div>
        <div>
          <p>🎤 {name}</p>
          <p>🎵 {performance}</p>
        </div>
        {score && (
          <div>
            <p>🌟 {score}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const avatars: string[] = [
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👱",
  "👨",
  "🧔",
  "🧔‍♂️",
  "🧔‍♀️",
  "👨‍🦰",
  "👨‍🦱",
  "👨‍🦳",
  "👨‍🦲",
  "👩",
  "👩‍🦰",
  "🧑‍🦰",
  "👩‍🦱",
  "🧑‍🦱",
  "👩‍🦳",
  "🧑‍🦳",
  "👩‍🦲",
  "🧑‍🦲",
  "👱‍♀️",
  "👱‍♂️",
  "🧓",
  "👴",
  "👵",
];

function Avatar({ avatar }: { avatar?: string }) {
  const personIndex = Math.floor(Math.random() * avatars.length);
  return (
    <>
      <span className="Person">{avatar || avatars[personIndex]}</span>
    </>
  );
}

export default Contestant;
