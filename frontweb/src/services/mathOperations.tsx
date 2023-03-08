export const sum = (num: number): number => {
  return num + 1;
};

export const multiply = (num: number, mult: number): number | string => {
  if (mult === 2 || mult === 3) {
    return num * mult;
  }

  return "Multiplier not accepted";
};
