import React, { useContext } from 'react';
import { useState } from 'react';
//import supabase from '../app/supabase';
import { useNavigate } from 'react-router-dom';
import { SupabaseContext } from '../contexts/SupabaseContext';
import { AuthContext } from '../contexts/AuthContext';

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { supabase } = useContext(SupabaseContext);
    const { login } = useContext(AuthContext);

    async function auth(e) {
        e.preventDefault();
        if (username === '') {
            alert('Введите имя!');
            return;
        }
        if (password === '') {
            alert('Введите пароль!');
            return;
        }
        const { data, error } = await supabase.from('Users').select('*').eq('name', username).eq('password', password);
        if (error) {
            console.error(error);
            return;
        }
        if (data.length === 0) {
            alert('Пользователь не найден');
            return;
        } else {
            console.log('Пользователь найден:', data);
            login(data[0]);
            navigate('/home', { replace: true });
        }
    }

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-4'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <h2 className='card-title text-center mb-4'>Авторизация</h2>
                            <form onSubmit={auth}>
                                <div className='mb-3'>
                                    <label htmlFor='username' className='form-label'>
                                        Имя
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder='Введите имя'
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>
                                        Пароль
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Введите пароль'
                                    />
                                </div>

                                <div className='d-grid gap-2'>
                                    <button type='submit' className='btn btn-primary'>
                                        Войти
                                    </button>
                                </div>

                                <div className='mt-3 text-center'>
                                    <a href='/registration' className='text-decoration-none'>
                                        Регистрация
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
