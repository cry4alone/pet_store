import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user || Object.keys(user).length === 0) {
            navigate('/auth', { replace: true });
        }
    }, [user, navigate]);

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-6'>
                    <div className='card shadow-sm'>
                        <div className='card-body text-center'>
                            <h1 className='card-title mb-4'>Профиль пользователя</h1>

                            {user && Object.keys(user).length > 0 && (
                                <>
                                    <div className='mb-3'>
                                        <p className='text'>Имя пользователя</p>
                                        <h4 className='text-primary'>{user.name}</h4>
                                    </div>

                                    <div className='mb-4'>
                                        <p className='text'>Статус аккаунта</p>
                                        <h6 className='text-success'>Активен</h6>
                                    </div>

                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {
                                            logout();
                                            navigate('/auth', { replace: true });
                                        }}
                                    >
                                        Выйти из аккаунта
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
