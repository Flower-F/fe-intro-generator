import { AuthingGuard } from '@authing/react-ui-components';
import { User } from '@authing/react-ui-components/components/index';
import '@authing/react-ui-components/lib/index.min.css';

const Login = () => {
  const appId = '62110454c4fafbf8af15124a';
  const onLogin = (userInfo: User) => {
    // console.log(userInfo);
    window.localStorage.token = userInfo.token;
    window.localStorage.tokenExpiredAt = userInfo.tokenExpiredAt;
    window.localStorage.photo = userInfo.photo;
    window.location.reload();
  };

  return <AuthingGuard appId={appId} onLogin={onLogin} />;
};

export default Login;
