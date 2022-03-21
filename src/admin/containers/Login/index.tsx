import { AuthingGuard } from '@authing/react-ui-components';
import { User } from '@authing/react-ui-components/components/index';
import '@authing/react-ui-components/lib/index.min.css';
import './style.css';

const Login = () => {
  const appId = '62110454c4fafbf8af15124a';
  const onLogin = (userInfo: User) => {
    localStorage.token = userInfo.token;
    localStorage.tokenExpiredAt = userInfo.tokenExpiredAt;
    localStorage.photo = userInfo.photo;
    localStorage.id = userInfo.id;
    window.location.reload();
  };

  return <AuthingGuard appId={appId} onLogin={onLogin} />;
};

export default Login;
