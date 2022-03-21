import { logout } from './logout';

export const getLoginStatus = () => {
  const { token, tokenExpiredAt } = localStorage;

  const currentTime = new Date().getTime();
  const expiredTime = new Date(tokenExpiredAt).getTime();

  let login = false;

  if (token && expiredTime && currentTime <= expiredTime) {
    login = true;
  }

  if (!login) {
    logout();
  }

  return login;
};
