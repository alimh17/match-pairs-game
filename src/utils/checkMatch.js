export const setCheckValue = (check, e, firstValues) => {
  const copyCheck = [...check];
  if (copyCheck[0] === null) {
    copyCheck[0] = +e.target.id;
  } else {
    copyCheck[1] = +e.target.id;
    // console.log(firstValues);
    // console.log(e.target.id);
    // firstValues.map((item) => {
    //   return (copyCheck[2] = item[2]);
    // });
  }

  return copyCheck;
};
