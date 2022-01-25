import React, { useEffect, useRef, useState } from "react";

import { setCheckValue } from "../../utils/checkMatch";
import { setConditionsHelperThree } from "../../utils/setConditons";
import { setThirdElementValues } from "../../utils/setElementValues";

import "../../App.css";

const ThirdRow = ({
  check,
  setCheck,
  value,
  counter,
  condition,
  setCondition,
}) => {
  const Ref = useRef(null);
  const [thirdValues, setThirdValue] = useState([]);

  let preventErr;
  if (
    (check[0] === null && check[1] === null) ||
    (typeof check[0] === "number" && check[1] === null)
  ) {
    preventErr = true;
  } else {
    preventErr = false;
  }

  useEffect(() => {
    let elementValue = setThirdElementValues(value, Ref);
    setThirdValue(elementValue);
  }, [value]);

  const handleCheckValues = (e) => {
    const hasClass = e.target.className.slice(-1);
    const thirdElement = Ref.current.children[hasClass];
    thirdElement.className = `setAnim item ${hasClass}`;

    const result = setConditionsHelperThree(condition, e);
    setCondition(result);
    setCheckValue(check, e);
    setCheck(setCheckValue(check, e, value));
  };

  return (
    <div className="third" ref={Ref}>
      <div
        className="item 0"
        id="8"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[8] && <img alt="" src={thirdValues[0]} id="8" />}
      </div>
      <div
        className="item 1"
        id="9"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[9] && <img alt="" src={thirdValues[1]} id="9" />}
      </div>
      <div
        className="item 2"
        id="10"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[10] && <img alt="" src={thirdValues[2]} id="10" />}
      </div>
      <div
        className="item 3"
        id="11"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[11] && <img alt="" src={thirdValues[3]} id="11" />}
      </div>
    </div>
  );
};

export default ThirdRow;
