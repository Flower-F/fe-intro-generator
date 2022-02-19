import { AuthingGuard } from "@authing/react-ui-components";
import "@authing/react-ui-components/lib/index.min.css";

const Login = () => {
  const appId = "620bb1365acd9f4c6204e3d5";
  const onLogin = (userInfo) => {
    window.localStorage.token = userInfo.token;
    window.localStorage.tokenExpiredAt = userInfo.tokenExpiredAt;
    window.localStorage.photo = userInfo.photo;
    window.location.reload();
  };

  return <AuthingGuard appId={appId} onLogin={onLogin} />;
};

export default Login;
