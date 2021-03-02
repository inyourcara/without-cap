import React from 'react';
import grid from '../components/grid';

export default function Block() {
    return (
        <div>
            <div className="grid-stack">
  <div className="grid-stack-item">
    <div className="grid-stack-item-content">Item 1</div>
  </div>
  <div className="grid-stack-item" data-gs-width={2}>
    <div className="grid-stack-item-content">Item 2 wider</div>
  </div>
</div>
        </div>
    )
}
