import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, Provider } from 'react-redux';
import HomeManagement from './containers/HomeManagement';
import { Route, Routes, HashRouter as Router, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
  RollbackOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import BasicSetting from './containers/BasicSetting';
import Login from './containers/Login';
import store from './store';
import { getChangeSchemaAction } from './store/actions';
import { parseJsonByString } from '../common/utils';
import { initAuthClient, getAuthClient } from '@authing/react-ui-components';
import { getLoginStatus } from './utils/login';
import 'normalize.css';
import 'antd/dist/antd.css';
import styles from './style.module.scss';

initAuthClient({
  appId: '620bb1365acd9f4c6204e3d5',
});

const { Header, Sider, Content } = Layout;

const useStore = () => {
  const dispatch = useDispatch();
  const changeSchema = (schema) => {
    dispatch(getChangeSchemaAction(schema));
  };
  return { changeSchema };
};

const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleToggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return {
    collapsed,
    handleToggleCollapsed,
  };
};

const MyLayout = () => {
  const handleHomePageRedirect = () => {
    window.location.href = '/';
  };

  const handleLogout = () => {
    getAuthClient().logout();
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiredAt');
    localStorage.removeItem('photo');
    window.location.reload();
  };

  const { collapsed, handleToggleCollapsed } = useCollapsed();
  const { changeSchema } = useStore();

  const login = getLoginStatus();
  const photo = window.localStorage.photo;

  useEffect(() => {
    // axiosInstance.get('/api/schema/getLatestOne').then((res) => {
    //   const data = res?.data;
    //   if (data) {
    //     changeSchema(parseJsonByString(data.schema));
    //   }
    // });

    const schema = localStorage.schema;
    changeSchema(parseJsonByString(schema));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Layout>
        <Sider
          className={styles.sidebar}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
            <Menu.Item key="admin-home" icon={<HomeOutlined />}>
              <NavLink to="/">首页内容管理</NavLink>
            </Menu.Item>
            <Menu.Item key="admin-setting" icon={<SettingOutlined />}>
              <NavLink to="/setting">基础内容配置</NavLink>
            </Menu.Item>
            <Menu.Item
              key="admin-back"
              onClick={handleHomePageRedirect}
              icon={<RollbackOutlined />}
            >
              返回用户页面
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className={styles.collapsed}
                onClick={handleToggleCollapsed}
              />
            ) : (
              <MenuFoldOutlined
                className={styles.collapsed}
                onClick={handleToggleCollapsed}
              />
            )}
            {/* <img
              src={photo}
              alt="我的头像"
              className={styles.avatar}
              onClick={handleLogout}
            /> */}
          </Header>
          <Content className={styles.content}>
            <Routes>
              <Route path="/" element={<HomeManagement />}></Route>
              <Route path="/setting" element={<BasicSetting />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <MyLayout />
  </Provider>,
  document.getElementById('root'),
);
