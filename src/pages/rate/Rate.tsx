import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Contestant, {
  IContestantProps,
} from "../../utils/components/contestant/Contestant";
import InfoMessage from "../../utils/components/infoMessage/InfoMessage";
import Logout from "../../utils/components/logout/Logout";
import Select from "../../utils/components/select/Select";
import { fetchContestant } from "./action";
import "./Rate.css";

const ratings = [...Array(10)].map((_, i) => `${i + 1} 🌟`);
const duration = 5000;
function RatePage() {
  const { contestId, contestantId } = useParams();
  const [contestant, setContestant] = useState<IContestantProps | null>(null);
  const [selected, setSelected] = useState(0);
  const [isInfoMessageVisbible, setInfoMessageVisible] = useState(false);

  const onSelectChange = (e: React.FormEvent<HTMLSelectElement>, i: number) => {
    setSelected(i);
    setInfoMessageVisible(true);
  };

  useEffect(() => {
    fetchContestant(contestId || "", contestantId || "").then(setContestant);
    return;
  }, [contestId, contestantId]);
  return (
    <div className="Rate">
      <Link to="/">Back</Link>
      <Select
        options={ratings}
        selected={selected}
        onChangeHandle={onSelectChange}
      />
      <InfoMessage
        level="success"
        message="The score has been updated"
        isVisible={isInfoMessageVisbible}
        duration={duration}
        durationEnd={() => setInfoMessageVisible(false)}
      />
      {contestant && <Contestant {...contestant} />}
      <Logout />
    </div>
  );
}

export default RatePage;
