export const getLoginStatus = () => {
  const { token, tokenExpiredAt } = window.localStorage;

  const currentTime = new Date().getTime();
  const expiredTime = new Date(tokenExpiredAt).getTime();

  let login = false;

  if (token && currentTime <= expiredTime) {
    login = true;
  }

  if (!login) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiredAt');
    localStorage.removeItem('photo');
  }

  return login;
};
