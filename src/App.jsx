import { useState } from 'react';
import { DataWrapper } from './components/data-wrapper';
import { ResultWrapper } from './components/result-wrapper';

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  console.log(tip, people, bill);

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="" />
      </header>
      <div className="general-wrapper">
        <DataWrapper
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tip={tip}
          setTip={setTip}
        />
        <ResultWrapper />
      </div>
    </>
  );
}
