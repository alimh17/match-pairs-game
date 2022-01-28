import React, { useEffect, useRef, useState } from "react";

import "../../App.css";
import { setCheckValue } from "../../utils/checkMatch";
import { setConditionsHelperFive } from "../../utils/setConditons";
import { setFiveElementValues } from "../../utils/setElementValues";

const FiveRow = ({
  check,
  setCheck,
  value,
  counter,
  condition,
  setCondition,
}) => {
  const Ref = useRef(null);
  const [fiveValue, setFiveValue] = useState([]);

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
    let elementValue = setFiveElementValues(value, Ref);
    setFiveValue(elementValue);
  }, [value]);

  const handleCheckValues = (e) => {
    const hasClass = e.target.className.slice(-1);
    const fiveElement = Ref.current.children[hasClass];
    fiveElement.className = `setAnim item ${hasClass}`;
    setTimeout(() => {
      fiveElement.className = `item ${hasClass}`;
    }, 2000);

    const result = setConditionsHelperFive(condition, e);
    setCondition(result);
    setCheckValue(check, e);
    setCheck(setCheckValue(check, e, value));
  };

  return (
    <div className="five" ref={Ref}>
      <div
        className="item 0"
        id="16"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[16] && <img alt="" src={fiveValue[0]} id="16" />}
      </div>
      <div
        className="item 1"
        id="17"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[17] && <img alt="" src={fiveValue[1]} id="17" />}
      </div>
      <div
        className="item 2"
        id="18"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[18] && <img alt="" src={fiveValue[2]} id="18" />}
      </div>
      <div
        className="item 3"
        id="19"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[19] && <img alt="" src={fiveValue[3]} id="19" />}
      </div>
    </div>
  );
};

export default FiveRow;
