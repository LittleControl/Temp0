import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './basiclayout.css';
import { history, Link } from 'umi';
import route from 'color-convert/route';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const headerMenu = [
  { route: '/index', name: '首页', key: 'index' },
  { route: '/nothing', name: '没用', key: 'nothing' },
  { route: '/index1', name: '首页', key: 'index1' },
  { route: '/nothing2', name: '没用', key: 'nothing' },
  { route: '/index3', name: '首页', key: 'index3' },
  { route: '/nothing4', name: '没用', key: 'nothing4' },
  { route: '/index5', name: '首页', key: 'index5' },
  { route: '/nothing6', name: '没用', key: 'nothing6' },
  { route: '/index7', name: '首页', key: 'index7' },
  { route: '/nothing8', name: '没用', key: 'nothing8' },
];

const siderMenu = [
  { route: '/index9', name: '首页', key: 'index9' },
  { route: '/nothing10', name: '没用', key: 'nothing10' },
  { route: '/index11', name: '首页', key: 'index11' },
  { route: '/nothing12', name: '没用', key: 'nothing12' },
  { route: '/index13', name: '首页', key: 'index13' },
  { route: '/nothing14', name: '没用', key: 'nothing14' },
  { route: '/index15', name: '首页', key: 'index15' },
  { route: '/nothing16', name: '没用', key: 'nothing16' },
  { route: '/index17', name: '首页', key: 'index17' },
  { route: '/nothing18', name: '没用', key: 'nothing18' },
];

const BasicLayout = (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <span style={{ color: 'red' }}>一个精致的logo</span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[history.location.pathname]}
        >
          {headerMenu.map((value) => {
            return (
              <Menu.Item key={value.key}>
                <Link to={value.route}>{value.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['index9']}
              style={{ height: '100%' }}
            >
              {siderMenu.map((value) => {
                return (
                  <Menu.Item key={value.key}>
                    <Link to={value.route}>{value.name}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Nothing Can be Done! ©2077
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
