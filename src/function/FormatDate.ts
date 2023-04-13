const hadleConvertsSecondsToDate = (seconds: any, nanoseconds: any) => {
  return new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleDateString();
};

const handleConvertsSecondToTime = (seconds: any, nanoseconds: any) => {
  return new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleTimeString();
};

const reverseString = (s: string) => {
  return s.split("").reverse().join("");
};

export {
  hadleConvertsSecondsToDate,
  handleConvertsSecondToTime,
  reverseString,
};
