import React, { useEffect, useRef, useState } from "react";

import "../../App.css";
import { setCheckValue } from "../../utils/checkMatch";
import { setConditionsHelperTwo } from "../../utils/setConditons";
import { setSecondElementValues } from "../../utils/setElementValues";

const SecondRow = ({
  check,
  setCheck,
  value,
  counter,
  condition,
  setCondition,
}) => {
  const Ref = useRef(null);
  const [secondValue, setSecondValue] = useState([]);

  let preventErr = false;
  if (
    (check[0] === null && check[1] === null) ||
    (typeof check[0] === "number" && check[1] === null)
  ) {
    preventErr = true;
  } else {
    preventErr = false;
  }

  useEffect(() => {
    let elementValue = setSecondElementValues(value, Ref);
    setSecondValue(elementValue);
  }, [value]);

  const handleCheckValues = (e) => {
    const hasClass = e.target.className.slice(-1);
    const socondElement = Ref.current.children[hasClass];
    socondElement.className = `setAnim item ${hasClass}`;

    setTimeout(() => {
      socondElement.className = `item ${hasClass}`;
    }, 2000);

    const result = setConditionsHelperTwo(condition, e);
    setCondition(result);
    setCheckValue(check, e);
    setCheck(setCheckValue(check, e, value));
  };

  return (
    <div className="second" ref={Ref}>
      <div
        className="item 0"
        id="4"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[4] && <img alt="" src={secondValue[0]} id="4" />}
      </div>
      <div
        className="item 1"
        id="5"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[5] && <img alt="" src={secondValue[1]} id="5" />}
      </div>
      <div
        className="item 2"
        id="6"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[6] && <img alt="" src={secondValue[2]} id="6" />}
      </div>
      <div
        className="item 3"
        id="7"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[7] && <img alt="" src={secondValue[3]} id="6" />}
      </div>
    </div>
  );
};

export default SecondRow;
