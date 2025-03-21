import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { SupabaseContext } from '../contexts/SupabaseContext';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCopy, setPasswordCopy] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const { supabase } = useContext(SupabaseContext);

    const reg = async (e) => {
        e.preventDefault();

        if (password !== passwordCopy) {
            alert('Пароли не совпадают!');
            return;
        }

        if (username.trim() === '') {
            alert('Введите имя!');
            return;
        }

        const newUser = {
            name: username,
            password: password,
        };

        const { error } = await supabase.from('Users').insert(newUser);
        if (error) {
            console.error(error.message);
        } else {
            console.log('Успешно');
            alert('Регистрация прошла успешно!');
            setUser(newUser);
            navigate('/home', { replace: true });
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='card-title text-center mb-4'>Регистрация</h2>
                            <form onSubmit={reg}>
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
                                        placeholder='Введите ваше имя'
                                        required
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
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='passwordCopy' className='form-label'>
                                        Повторите пароль
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='passwordCopy'
                                        value={passwordCopy}
                                        onChange={(e) => setPasswordCopy(e.target.value)}
                                        placeholder='Повторите пароль'
                                        required
                                    />
                                </div>

                                <div className='d-grid'>
                                    <button type='submit' className='btn btn-primary'>
                                        Зарегистрироваться
                                    </button>
                                </div>

                                <p className='mt-3 text-center'>
                                    Уже зарегистрированы?{' '}
                                    <a href='/auth' className='text-decoration-none'>
                                        Войти
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
