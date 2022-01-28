import React, { useEffect, useRef, useState } from "react";

import { setCheckValue } from "../../utils/checkMatch";
import { setConditionsHelperFour } from "../../utils/setConditons";
import { setFourElementValues } from "../../utils/setElementValues";

import "../../App.css";

const FourRow = ({
  check,
  setCheck,
  value,
  counter,
  condition,
  setCondition,
}) => {
  const Ref = useRef(null);
  const [fourValue, setFourValue] = useState([]);

  let preventErr = false;
  if (
    (check[0] === null && check[1] === null) ||
    (typeof check[0] === "number" && check[1] === null)
  ) {
    setTimeout(() => {
      preventErr = true;
    }, 200);
  } else {
    preventErr = false;
  }

  useEffect(() => {
    let elementValue = setFourElementValues(value, Ref);
    setFourValue(elementValue);
  }, [value]);

  const handleCheckValues = (e) => {
    const hasClass = e.target.className.slice(-1);
    const fourElement = Ref.current.children[hasClass];
    fourElement.className = `setAnim item ${hasClass}`;

    const result = setConditionsHelperFour(condition, e);
    setCondition(result);
    setCheckValue(check, e);
    setCheck(setCheckValue(check, e, value));
  };

  return (
    <div className="four" ref={Ref}>
      <div
        className="item 0"
        id="12"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[12] && <img alt="" src={fourValue[0]} id="12" />}
      </div>
      <div
        className="item 1"
        id="13"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[13] && <img alt="" src={fourValue[1]} id="13" />}
      </div>
      <div
        className="item 2"
        id="14"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[14] && <img alt="" src={fourValue[2]} id="14" />}
      </div>
      <div
        className="item 3"
        id="15"
        onClick={(e) => preventErr && handleCheckValues(e)}
      >
        {condition[15] && <img alt="" src={fourValue[3]} id="15" />}
      </div>
    </div>
  );
};

export default FourRow;
