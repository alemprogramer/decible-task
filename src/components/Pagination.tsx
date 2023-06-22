import { Button, Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

type paginationProps = {
  currentPage: number;
  pageChangeCb: (e: number) => void;
  content: any;
};

const Pagination: FC<paginationProps> = ({
  currentPage,
  pageChangeCb,
  content,
}) => {
  return (
    <div className=''>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          color: 'white',
          marginTop: '50px',
        }}
      >
        <Button
          title='previous'
          type='text'
          shape='default'
          icon={<LeftOutlined style={{ fontSize: '10px' }} />}
          disabled={currentPage === 1}
          onClick={() => pageChangeCb(currentPage - 1)}
        />
        {[
          ...Array(Math.floor(content?.paginatedCalls?.totalCount / 10 || 10)),
        ].map((page, i) => (
          <Button
            key={i}
            type='text'
            shape='default'
            size='small'
            onClick={() => pageChangeCb(i + 1)}
            disabled={currentPage === i + 1}
            style={{
              background: currentPage === i + 1 ? 'black' : 'transparent',
              color: currentPage === i + 1 ? 'white' : 'black',
            }}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          title='next'
          type='text'
          shape='default'
          icon={<RightOutlined style={{ fontSize: '10px' }} />}
          disabled={
            currentPage ===
            Math.floor(content?.paginatedCalls?.totalCount / 10 || 10)
          }
          onClick={() => pageChangeCb(currentPage + 1)}
        />
      </div>
      <Row justify='center' style={{ marginTop: '8px' }}>
        <Col>
          <Typography.Text style={{ textAlign: 'center' }}>
            {`1 - ${Math.floor(
              content?.paginatedCalls?.totalCount / 10 || 10
            )} of 
                ${content?.paginatedCalls?.totalCount} results`}
          </Typography.Text>
        </Col>
      </Row>
    </div>
  );
};

export default Pagination;

