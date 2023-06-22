import React, { FC } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const router = useRouter();
  return (
    <div
      style={{
        border: '1px solid #000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px 16px',
        alignItems: 'center',
        marginBottom: '40px',
        width: '1200px',
      }}
    >
      <p
        style={{
          textTransform: 'capitalize',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Calls Inc
      </p>
      <Button
        style={{
          background: '#000',
          color: '#fff',
        }}
        onClick={() => {
          localStorage.clear();
          router.push('/');
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default Header;

