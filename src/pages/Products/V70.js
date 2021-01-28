import React from 'react';
import { Button, Row, Col } from 'antd';

const V70 = () => {
  return (
    <>
      <Row gutter={(12, 12)}>
        <Col span={6}>
          <img
            src={require('@/static/test.jpg')}
            style={{ width: '300px', height: '100px' }}
          />
        </Col>
        <Col span={6}>
          <span style={{ color: 'blue' }}>标题事件测试</span>
          <br />
          some contentssome contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
        </Col>
        <Col span={6}>
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
        </Col>
        <Col span={6}>
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          <Button type="primary">立即下载</Button>
        </Col>
      </Row>
      <br />
      <Row gutter={(12, 12)}>
        <Col span={6}>
          <img
            src={require('@/static/test.jpg')}
            style={{ width: '300px', height: '100px' }}
          />
        </Col>
        <Col span={6}>
          <span style={{ color: 'blue' }}>标题事件测试</span>
          <br />
          some contentssome contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
        </Col>
        <Col span={6}>
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
        </Col>
        <Col span={6}>
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          <Button type="primary">立即下载</Button>
        </Col>
      </Row>
      <br />
      <Row gutter={(12, 12)}>
        <Col span={6}>
          <img
            src={require('@/static/test.jpg')}
            style={{ width: '300px', height: '100px' }}
          />
        </Col>
        <Col span={6}>
          <span style={{ color: 'blue' }}>标题事件测试</span>
          <br />
          some contentssome contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
        </Col>
        <Col span={6}>
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
        </Col>
        <Col span={6}>
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          some contentssome contentssome contents
          <br />
          <Button type="primary">立即下载</Button>
        </Col>
      </Row>
    </>
  );
};

export default V70;
