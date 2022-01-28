import React, { useEffect, useState } from "react";

import FirstRow from "./components/firstRow/FirstRow";
import SecondRow from "./components/secondRow/SecondRow";
import ThirdRow from "./components/thidRow/ThirdRow";
import FourRow from "./components/fourRow/FourRow";

import "./App.css";
import FiveRow from "./components/fiveRow/FiveRow";
import { generator } from "./utils/generateRandom";

function App() {
  const [value, setValue] = useState([]);
  const [check, setCheck] = useState([null, null]);
  const [counter, setCounter] = useState(0);
  const [condition, setCondition] = useState(new Array(19).fill(false));

  useEffect(() => {
    if (check[0] !== null && check[1] !== null) {
      const matchValues = value.map((item) => {
        const test = [];
        test.push(item[0]);
        test.push(item[1]);
        return test;
      });

      const result = matchValues.map((item, index) => {
        if (
          (item[0] === check[0] && item[1] === check[1]) ||
          (item[1] === check[0] && item[0] === check[1])
        ) {
          setCheck([20, 20]);
          return item;
        } else {
          setTimeout(() => {
            setCheck([null, null]);
          }, 1000);
          return null;
        }
      });

      const res = result.filter((f) => f !== null);

      if (res.length > 0) {
        setCounter(counter + 1);
      } else {
        setTimeout(() => {
          const cpCondition = [...condition];
          cpCondition[check[0]] = false;
          cpCondition[check[1]] = false;
          setCondition(cpCondition);
        }, 1000);
      }
    }
  }, [check, value, counter, condition]);

  useEffect(() => {
    setValue(generator());
  }, []);

  return (
    <div className="container">
      <FirstRow
        counter={counter}
        condition={condition}
        setCondition={setCondition}
        check={check}
        setCheck={setCheck}
        value={value}
        setValue={setValue}
      />
      <SecondRow
        counter={counter}
        condition={condition}
        setCondition={setCondition}
        check={check}
        setCheck={setCheck}
        value={value}
        setValue={setValue}
      />
      <ThirdRow
        counter={counter}
        condition={condition}
        setCondition={setCondition}
        check={check}
        setCheck={setCheck}
        value={value}
        setValue={setValue}
      />
      <FourRow
        counter={counter}
        condition={condition}
        setCondition={setCondition}
        check={check}
        setCheck={setCheck}
        value={value}
        setValue={setValue}
      />
      <FiveRow
        counter={counter}
        condition={condition}
        setCondition={setCondition}
        check={check}
        setCheck={setCheck}
        value={value}
        setValue={setValue}
      />
      <div className="btn_container">
        {counter === 10 && <h1>YOU WIN</h1>}

        <button
          onClick={() => {
            setValue(generator());
            setCheck([null, null]);
            setCounter(0);
            setCondition(new Array(19).fill(false));
          }}
        >
          AGAIN
        </button>
      </div>
    </div>
  );
}

export default App;
