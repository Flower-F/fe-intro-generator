export const parseJsonByString = (str: string, defaultValue: any) => {
  let returnValue = defaultValue;
  try {
    returnValue = JSON.parse(str);
  } catch (e) {}

  return returnValue;
};
