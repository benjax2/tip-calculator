import { useEffect, useState } from 'react';
import { DataWrapper } from './components/data-wrapper';
import { ResultWrapper } from './components/result-wrapper';

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  useEffect(() => {
    if (bill && tip && people) {
      const fixed_tip = tip / 100;
      const tip_total = bill * fixed_tip;

      const tip_amount = tip_total / people;
      const total_account = (bill + tip_total) / people;

      setTotalTip(tip_amount.toFixed(2));
      setTotal(total_account.toFixed(2));
    }
  }, [tip, bill, people]);

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
        <ResultWrapper totalTip={totalTip} total={total} />
      </div>
    </>
  );
}
