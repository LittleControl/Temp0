import React from 'react';
import { Layout, Menu } from 'antd';
import './basiclayout.css';
import { history, Link } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const headerMenu = [
  { route: '/index', name: '首页', key: '/index' },
  { route: '/products', name: '套餐产品', key: '/products' },
  { route: '/process', name: '制作流程', key: '/process' },
  { route: '/advertising', name: '广告宣传', key: '/advertising' },
  { route: '/template', name: '网站模板', key: '/template' },
  { route: '/custom', name: '版本定做', key: '/custom' },
  { route: '/aboutus', name: '关于我们', key: '/aboutus' },
];

const siderMenu = [
  { route: '/products', name: '全部版本', key: '/products' },
  { route: '/products/60', name: '60版本', key: '/products/60' },
  { route: '/products/70', name: '70版本', key: '/products/70' },
  { route: '/products/80', name: '80版本', key: '/products/80' },
  { route: '/products/90', name: '90版本', key: '/products/90' },
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
              defaultSelectedKeys={[history.location.pathname]}
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
