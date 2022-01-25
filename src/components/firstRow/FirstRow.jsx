import React, { useEffect, useRef, useState } from "react";

import "../../App.css";

import { setCheckValue } from "../../utils/checkMatch";
import { setConditionsHelper } from "../../utils/setConditons";
import { setFirstElementValues } from "../../utils/setElementValues";

const FirstRow = ({
  check,
  setCheck,
  value,
  counter,
  condition,
  setCondition,
}) => {
  const Ref = useRef(null);
  const [firstValues, setFirstValue] = useState([]);
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
    let elementValue = setFirstElementValues(value, Ref);
    setFirstValue(elementValue);
  }, [value]);

  const handleCheckValues = (e) => {
    const firstElement = Ref.current.children[e.target.id];
    firstElement.className = "setAnim item";

    const result = setConditionsHelper(condition, e);
    setCondition(result);
    setCheckValue(check, e);
    setCheck(setCheckValue(check, e, value));
  };

  return (
    <div className="first" ref={Ref}>
      <div
        className="item"
        id="0"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[0] && <img alt="" src={firstValues[0]} id="0" />}
      </div>
      <div
        className="item"
        id="1"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[1] && <img alt="" src={firstValues[1]} id="1" />}
      </div>
      <div
        className="item"
        id="2"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[2] && <img alt="" src={firstValues[2]} id="2" />}
      </div>
      <div
        className="item"
        id="3"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[3] && <img alt="" src={firstValues[3]} id="3" />}
      </div>
    </div>
  );
};

export default FirstRow;
