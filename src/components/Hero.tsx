import { Select, Typography } from 'antd';
import React, { FC } from 'react';

const Hero: FC = () => {
  const { Option } = Select;
  return (
    <div>
      <div
        style={{
          marginBottom: '20px',
        }}
      >
        <Typography.Text
          style={{
            textTransform: 'capitalize',
            textAlign: 'start',
            fontSize: '30px',
          }}
        >
          Turing Technologies Frontend Test
        </Typography.Text>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '30px',
        }}
      >
        <Typography.Text>
          Filter by: <Typography.Text strong>Status</Typography.Text>
        </Typography.Text>
        <Select defaultValue='all' size='large' style={{ minWidth: '150px' }}>
          <Option value='all'>All</Option>
          <Option value='true'>Archive</Option>
          <Option value='false'>Unarchive</Option>
        </Select>
      </div>
    </div>
  );
};

export default Hero;

