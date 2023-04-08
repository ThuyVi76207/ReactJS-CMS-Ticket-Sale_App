const hadleConvertsSecondsToDate = (seconds: any, nanoseconds: any) => {
  return new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleDateString();
};

export { hadleConvertsSecondsToDate };
