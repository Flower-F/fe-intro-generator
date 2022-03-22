import { useState, useEffect, lazy, Suspense } from 'react';
import HomeManagement from './containers/HomeManagement';
import { Route, Routes, HashRouter as Router, NavLink } from 'react-router-dom';
import { Layout, Menu, Tooltip, message } from 'antd';
import {
  SettingOutlined,
  BulbOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FormOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import Login from './containers/Login';
import { parseJsonByString } from '../common/utils';
import { initAuthClient, getAuthClient } from '@authing/react-ui-components';
import { getLoginStatus } from './utils/login';
import { axiosInstance } from '../common/request';
import 'normalize.css';
import 'antd/dist/antd.css';
import styles from './style.module.scss';
import useStore from './hooks/useStore';
import { logout } from './utils/logout';
import FormManagement from './containers/FormManagement';

const PageAttributeManagement = lazy(
  () => import('./containers/PageAttributeManagement'),
);

initAuthClient({
  appId: '62110454c4fafbf8af15124a',
});

const { Header, Sider, Content } = Layout;

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
  const handleLogout = () => {
    getAuthClient()?.logout();
    logout();
    window.location.reload();
  };

  const getDefaultSelectedKeys = () => {
    if (window.location.hash === '#/attribute') {
      return ['admin-attribute'];
    } else if (window.location.hash === '#/form') {
      return ['admin-form'];
    } else {
      return ['admin-home'];
    }
  };

  const { collapsed, handleToggleCollapsed } = useCollapsed();
  const { changeSchema } = useStore();

  const login = getLoginStatus();
  const photo = localStorage.photo;

  useEffect(() => {
    axiosInstance
      .get('/getLatestOne', {
        params: {
          id: localStorage.getItem('id'),
        },
      })
      .then((res) => {
        const data = res?.data;
        if (data && data.code === 200) {
          // console.log(data.schema);
          changeSchema(parseJsonByString(data.schema));
        }
      })
      .catch(() => {
        message.error('网络错误');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !login ? (
    <Login />
  ) : (
    <Router>
      <Layout>
        <Sider
          className={styles.sidebar}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={getDefaultSelectedKeys()}
          >
            <Menu.Item key="admin-home" icon={<FormOutlined />}>
              <NavLink to="/">首页内容管理</NavLink>
            </Menu.Item>
            <Menu.Item key="admin-attribute" icon={<SettingOutlined />}>
              <NavLink to="/attribute">页面属性设置</NavLink>
            </Menu.Item>
            <Menu.Item key="admin-back" icon={<BulbOutlined />}>
              <a
                href={`${
                  window.location.origin
                }/index.html?id=${localStorage.getItem('id')}`}
                target="_blank"
                rel="noreferrer"
              >
                查看生成页面
              </a>
            </Menu.Item>
            <Menu.Item key="admin-form" icon={<DatabaseOutlined />}>
              <NavLink to="/form">查看表单数据</NavLink>
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
            <Tooltip
              arrowPointAtCenter
              title="退出登录"
              className={styles.avatar}
            >
              <img src={photo} alt="我的头像" onClick={handleLogout} />
            </Tooltip>
          </Header>
          <Content className={styles.content}>
            <Routes>
              <Route path="/" element={<HomeManagement />}></Route>
              <Route
                path="/attribute"
                element={
                  <Suspense fallback={<></>}>
                    <PageAttributeManagement />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/form"
                element={
                  <Suspense fallback={<></>}>
                    <FormManagement />
                  </Suspense>
                }
              ></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default MyLayout;
