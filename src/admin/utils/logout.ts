export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('tokenExpiredAt');
  localStorage.removeItem('photo');
  localStorage.removeItem('_authing_token');
  localStorage.removeItem('_authing_user');
}
