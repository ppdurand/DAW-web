import React from 'react';
import { Button, Form, Input, Card } from 'antd';
import './style.css'; // Arquivo CSS adicional (opcional)

export function Login({setRegisterFlag}) {
    function handleLogin(entity){
        console.log("conta acessada", entity)
    }

    function registerFlag(){
        setRegisterFlag(true)
    }
    
    return (
        <div className="login-container">
            <Card className="login-card">
                <h1 className="title-login">Login</h1>
                <Form onFinish={handleLogin} layout="vertical">
                    <Form.Item
                        label="Nome de usuário"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Digite seu nome de usuário" />
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Digite sua senha" />
                    </Form.Item>
                    <Form.Item>
                        <Button className='' type="link" block onClick={() => registerFlag()}>Não possui uma conta?</Button>
                        <Button type="primary" block htmlType="submit">
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}