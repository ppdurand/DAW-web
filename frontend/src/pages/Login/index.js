import React from 'react';
import { Button, Form, Input, Card } from 'antd';
import './style.css'; // Arquivo CSS adicional (opcional)

export function Login({ setRegisterFlag }) {
    async function handleLogin(entity) {
        try {
            const res = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entity),
            });

            if (!res.ok) {
                const error = await res.json()
                throw new Error(error.message || 'Erro ao fazer login');
            }

            const data = await res.json()
            localStorage.setItem('token', data.token)
            alert('Login feito com sucesso!')

        } catch (err) {
            alert(err.message)
        }
    }

function registerFlag() {
    setRegisterFlag(true)
}

return (
    <div className="login-container">
        <Card className="login-card">
            <h1 className="title-login">Login</h1>
            <Form onFinish={handleLogin} layout="vertical">
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Digite seu email" />
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