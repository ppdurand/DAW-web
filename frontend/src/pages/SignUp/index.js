import React from 'react';
import { Button, Card, Form, Input } from 'antd';

import './style.css';

export function SignUp({setRegisterFlag}) {
    async function saveAccount(values) {
        try{
            const res = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const error = await res.json()
                throw new Error(error.message || 'Erro ao fazer cadastro');
            }

            const data = await res.json()
            localStorage.setItem('token', data.token)
            alert('Conta criada com sucesso!')

        } catch (err) {
            alert(err.message)
        }
    }

    function handleRegisterFlag() {
        setRegisterFlag(false);
    }

    return (
        <div className='signUp-container'>
            <Card className='signUp-card'>
                <h1 className='signUp-title'>Criar nova conta</h1>
                <Form onFinish={saveAccount} layout='vertical'>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Informe seu email' }]}
                    >
                        <Input placeholder="Enter your username" />
                    </Form.Item>
                    <Form.Item
                        label="Nome de usuário"
                        name="username"
                        rules={[{ required: true, message: 'Digite um nome criativo' }]}
                    >
                        <Input placeholder="Enter your username" />
                    </Form.Item>
                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[{ required: true, message: 'Didiget uma senha forte!' }]}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="link"  block onClick={handleRegisterFlag}>Já possui uma conta?</Button>
                        <Button type="primary" block htmlType="submit">Registrar</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
