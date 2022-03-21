export function getParams() {
  const queryString = decodeURI(window.location.search);
  const result: { [x: string]: string } = {};
  if (queryString.indexOf('?') !== -1) {
    const strArray = queryString.split('?')[1].split('&');
    strArray.forEach((str) => {
      if (str.indexOf('=')) {
        const key = str.split('=')[0];
        const value = str.split('=')[1];
        result[key] = value;
      }
    });
  }
  return result;
}
