import React from 'react';
import { Button, Card, Form, Input } from 'antd';

import './style.css';

export function SignUp({setRegisterFlag}) {
    function saveAccount(values) {
        console.log('Received values:', values);
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
