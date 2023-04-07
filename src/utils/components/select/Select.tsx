import React from "react";
import "./Select.css";

interface ISelectProps {
  selected: number;
  onChangeHandle?: (e: React.FormEvent<HTMLSelectElement>, i: number) => any;
  options: string[];
}

function Select({ selected, onChangeHandle, options }: ISelectProps) {
  const onChangeHandleMust =
    onChangeHandle ||
    function (e: React.FormEvent<HTMLSelectElement>, i: number) {
      return;
    };
  return (
    <div className="Select">
      <select
        name="select"
        id="select"
        onChange={(e) =>
          onChangeHandleMust(e, Number.parseInt(e.currentTarget.value))
        }
      >
        {options.map((opt, i) => (
          <option key={`opt-${opt}`} value={i}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
