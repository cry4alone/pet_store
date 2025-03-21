import { React, useState } from 'react';
import supabase from '../app/supabase';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCopy, setPasswordCopy] = useState('');

    const reg = async (e) => {
        e.preventDefault();
        if (passwordCopy !== passwordCopy) {
            alert('Пароли не совпадают!');
            return;
        }
        if (username === '') {
            alert('Введите имя!');
            return;
        }
        const newUser = {
            name: username,
            password: password,
        }

        const { error } = await supabase.from('Users').insert(newUser);
        if (error) {
            console.error(error.message);
            return;
        }
        else console.log("Успешно");
    };

    return (
        <div className="d-flex">
            <h1>Регистрация</h1>
            <form onSubmit={reg}>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Имя' />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Пароль'
                />
                <input
                    type='password'
                    value={passwordCopy}
                    onChange={(e) => setPasswordCopy(e.target.value)}
                    placeholder='Повторите пароль'
                />
                <button type='submit'>Регистрация</button>
                <p>Уже зарегистрированы? <a href='/'>Войти</a></p>
            </form>
        </div>
    );
};

export default Registration;
