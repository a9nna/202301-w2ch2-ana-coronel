const strictEquals = (valueA, valueB) => {
  const areEqual = Object.is(valueA, valueB);
  const ruleExceptionNumber = "0";

  let isStrictEquals = false;

  if (
    (areEqual && !Number.isNaN(valueA)) ||
    (areEqual && !Number.isNaN(valueA))
  ) {
    isStrictEquals = true;
  }

  if (
    ruleExceptionNumber.includes(valueA) &&
    ruleExceptionNumber.includes(valueB)
  ) {
    isStrictEquals = true;
  }

  return isStrictEquals;
};

export default strictEquals;
