import React from 'react';

export default function TipButtons({ tip, setTip }) {
  const tips = [5, 10, 15, 25, 50];
  return (
    <ul>
      {tips.map((btn) => (
        <li key={btn} id={`percentage-${btn}`}>
          <button
            type="button"
            className={`percentage-button ${btn === tip && 'active'}`}
            value={btn}
            onClick={(e) => setTip(parseFloat(e.target.value))}
          >
            {btn}%
          </button>
        </li>
      ))}
      <li>
        <input
          type="number"
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
          onChange={(e) => setTip(parseFloat(e.target.value))}
        />
      </li>
    </ul>
  );
}
