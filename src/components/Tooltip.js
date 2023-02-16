import React, { useState } from "react";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="inline-block"
      // When to show the tooltip
      onMouseEnter={() => showTip()}
      onMouseLeave={() => hideTip()}
    >
      <span style={props.contentStyle} className={props.contentClasses}> {props.children}</span>
      { active && (
        <div className="relative">
          <div className='absolute border border-black font-normal left-0 p-1.5 text-black bg-white text-xs whitespace-nowrap top-0 before:top-full before:border-t-black -translate-x-1/2'>
          {props.content}
        </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
