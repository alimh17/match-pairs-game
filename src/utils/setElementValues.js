export const setFirstElementValues = (value, Ref) => {
  const firstChild = Ref.current.children[0].id;
  const secondChild = Ref.current.children[1].id;
  const thirdChild = Ref.current.children[2].id;
  const fourChild = Ref.current.children[3].id;
  const elementValues = new Array(4);

  value.map((item) => {
    if (+firstChild === item[0] || +firstChild === item[1]) {
      elementValues[0] = item[2];
    }
    if (+secondChild === item[0] || +secondChild === item[1]) {
      elementValues[1] = item[2];
    }
    if (+thirdChild === item[0] || +thirdChild === item[1]) {
      elementValues[2] = item[2];
    }
    if (+fourChild === item[0] || +fourChild === item[1]) {
      elementValues[3] = item[2];
    }
    return elementValues;
  });
  return elementValues;
};

export const setSecondElementValues = (value, Ref) => {
  const firstChild = Ref.current.children[0].id;
  const secondChild = Ref.current.children[1].id;
  const thirdChild = Ref.current.children[2].id;
  const fourChild = Ref.current.children[3].id;

  const elementValues = new Array(4);

  value.map((item) => {
    if (+firstChild === item[0] || +firstChild === item[1]) {
      elementValues[0] = item[2];
    }
    if (+secondChild === item[0] || +secondChild === item[1]) {
      elementValues[1] = item[2];
    }
    if (+thirdChild === item[0] || +thirdChild === item[1]) {
      elementValues[2] = item[2];
    }
    if (+fourChild === item[0] || +fourChild === item[1]) {
      elementValues[3] = item[2];
    }
    return elementValues;
  });
  return elementValues;
};

export const setThirdElementValues = (value, Ref) => {
  const firstChild = Ref.current.children[0].id;
  const secondChild = Ref.current.children[1].id;
  const thirdChild = Ref.current.children[2].id;
  const fourChild = Ref.current.children[3].id;

  const elementValues = new Array(4);

  value.map((item) => {
    if (+firstChild === item[0] || +firstChild === item[1]) {
      elementValues[0] = item[2];
    }
    if (+secondChild === item[0] || +secondChild === item[1]) {
      elementValues[1] = item[2];
    }
    if (+thirdChild === item[0] || +thirdChild === item[1]) {
      elementValues[2] = item[2];
    }
    if (+fourChild === item[0] || +fourChild === item[1]) {
      elementValues[3] = item[2];
    }
    return elementValues;
  });
  return elementValues;
};

export const setFourElementValues = (value, Ref) => {
  const firstChild = Ref.current.children[0].id;
  const secondChild = Ref.current.children[1].id;
  const thirdChild = Ref.current.children[2].id;
  const fourChild = Ref.current.children[3].id;

  const elementValues = new Array(4);

  value.map((item) => {
    if (+firstChild === item[0] || +firstChild === item[1]) {
      elementValues[0] = item[2];
    }
    if (+secondChild === item[0] || +secondChild === item[1]) {
      elementValues[1] = item[2];
    }
    if (+thirdChild === item[0] || +thirdChild === item[1]) {
      elementValues[2] = item[2];
    }
    if (+fourChild === item[0] || +fourChild === item[1]) {
      elementValues[3] = item[2];
    }
    return elementValues;
  });
  return elementValues;
};

export const setFiveElementValues = (value, Ref) => {
  const firstChild = Ref.current.children[0].id;
  const secondChild = Ref.current.children[1].id;
  const thirdChild = Ref.current.children[2].id;
  const fourChild = Ref.current.children[3].id;

  const elementValues = new Array(4);

  value.map((item) => {
    if (+firstChild === item[0] || +firstChild === item[1]) {
      elementValues[0] = item[2];
    }
    if (+secondChild === item[0] || +secondChild === item[1]) {
      elementValues[1] = item[2];
    }
    if (+thirdChild === item[0] || +thirdChild === item[1]) {
      elementValues[2] = item[2];
    }
    if (+fourChild === item[0] || +fourChild === item[1]) {
      elementValues[3] = item[2];
    }
    return elementValues;
  });
  return elementValues;
};
