import { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import "./InfoMessage.css";

export type MessageLevel = "success" | "warning" | "error";

export interface IInfoMessgeProps {
  level: MessageLevel;
  message: string;
  isVisible: boolean;
  duration: number;
  durationEnd: () => void;
}

function InfoMessage({
  level,
  message,
  isVisible,
  duration,
  durationEnd,
}: IInfoMessgeProps) {
  const icon = (() => {
    switch (level) {
      case "success":
        return "✅";
      case "warning":
        return "⚠️";
      case "error":
        return "🛑";
      default:
        return "✅";
    }
  })();
  const hide = { display: "none" };
  const show = { animation: `InfoMessage-hide ${duration}ms` };

  if (isVisible) setTimeout(durationEnd, duration);

  return (
    <div className="InfoMessage" style={isVisible ? show : hide}>
      <p>{`${icon} - ${message}`}</p>
    </div>
  );
}

export default InfoMessage;
