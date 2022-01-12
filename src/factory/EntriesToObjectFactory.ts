export default (entries: Array<string[]>): object => {
  const obj = {};
  entries.forEach((KeyValue) => {
    const [key, value] = KeyValue;

    obj[`${key}`] = value;
  });
  return obj;
};
