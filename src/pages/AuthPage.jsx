import React from 'react';
import { useState } from 'react';
import supabase from '../app/supabase';
import { useNavigate } from "react-router"

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function auth(e) {
        e.preventDefault();
        if (username == "") {
            alert('Введите имя!');
            return;
        }
        if (password== "") {
            alert('Введите пароль!');
            return;
        }
        const { data, error } = await supabase
            .from('Users')
            .select('*')
            .eq('name', username)
            .eq('password', password);
        if (error) {
            console.error(error);
            return;
        }
        if (data.length === 0) {
            alert('Пользователь не найден');
            return;
        } else {
            console.log('Пользователь найден:', data);
            navigate('/catalog', { replace: true });
        }
    }


    return (
        <>
            <h1>Авторизация</h1>
            <form onSubmit={auth}>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Имя' />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Пароль'
                />
                <button type='submit'>Войти</button>
                <a href='/registration'>Регистрация</a>
            </form>
        </>
    );
};


export default AuthPage;
