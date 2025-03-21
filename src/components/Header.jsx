import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import logo from "../assets/logo.png";

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid d-flex justify-content-between align-items-center'>
                <img className="img-fluid me-3" style={{ maxHeight: '40px' }} src={logo}></img>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='/home'>
                                Главная
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/feedback'>
                                Отзывы
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/checkout'>
                                Корзина
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='ms-auto me-4 d-flex'>
                    <button className="btn" onClick={toggleTheme}>
                        <i className="bi bi-brightness-high"></i>
                    </button>
                    <a className='nav-link' href='/account'>
                        <i className='bi bi-person-fill mb-0' style={{ fontSize: '1.5rem' }}></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;