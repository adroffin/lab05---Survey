import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
