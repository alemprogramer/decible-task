import React, { useState } from "react";
import { Form, Input, Button, Spin } from "antd";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "@/mutation/loginMutation";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";

const SignInPage = () => {
  const [UserName, setUserName] = useState('String!');
  const [password, setPassword] = useState('String!');

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();


  

  const handleLogin = async (event:any) => {
    // event?.preventDefault();
  
  try {
    const { data } = await login({
      variables: {
        input: {
          username: UserName,
          password: password,
        },
      },
    });

    // Handle successful login
    const { access_token,user } = data.login;
    localStorage.setItem('accessToken', access_token);
    if( access_token){
      router.push('/'+user?.id);
    }
  } catch (error) {
    console.log(error);
    
  }
};

const antIcon = <LoadingOutlined style={{ fontSize: 24, color:'#ffffff' }} spin />

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          borderRadius: "4px",
          padding: "16px",
          background: "#c1c1c1",
        }}
      >
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item label="UserName">
            <Input type="text" value={UserName} onChange={(e)=>setUserName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
            {loading ?<> <Spin  indicator={antIcon} />  loading...</>:'Sign In'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
