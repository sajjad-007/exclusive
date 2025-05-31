import React from "react";

const AlertInfo = ({text}) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-white rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-white"
      role="alert"
    >
      <span className="font-medium">Info alert!</span> {text || ` Change a few things up
      and try submitting again.`}
    </div>
  );
};

export default AlertInfo;
