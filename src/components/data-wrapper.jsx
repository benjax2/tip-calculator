import React from 'react';
import TipButtons from './tip-buttons';

export function DataWrapper({ bill, setBill, people, setPeople, tip, setTip }) {
  return (
    <>
      <div className="data-wrapper">
        <h1>Bill</h1>
        <label htmlFor="input-bill">
          <input
            className="input-bill"
            id="input-bill"
            type="number"
            value={bill}
            min="0"
            onChange={(e) => setBill(e.target.value)}
          />
        </label>
        <TipButtons tip={tip} setTip={setTip} />
        <h2>Number of People</h2>
        <label htmlFor="input-people">
          <input
            id="input-people"
            className="input-people"
            type="number"
            value={people}
            min="1"
            onChange={(e) => setPeople(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
