import { useState } from 'react';
import Cell from './cell';

function Grid() {
    const [setCellCount] = useState(0);
  
    const updateCellCount = (isOn) => {
      setCellCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
    };
  
    return (
      <div className="grid">
        <div className="grid-container">
          <Cell updateCount={updateCellCount} />
          <Cell updateCount={updateCellCount} />
          <Cell updateCount={updateCellCount} />
          <Cell updateCount={updateCellCount} />
        </div>
      </div>
    );
  }
  
  export default Grid;
  
  
  
  
  
  
