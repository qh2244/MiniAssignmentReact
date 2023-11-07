import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Cell({ updateCount }) {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    updateCount(isOn);
  };

  return (
    <div
      className={`cell ${isOn ? 'on' : 'off'}`}
      onClick={handleClick}
    ></div>
  );
}

export default Cell;
