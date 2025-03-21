import React from 'react';
import mainPageImg from '../assets/mainPageImg.jpg';
import Catalog from '../components/Catalog';



const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${mainPageImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        margin: '0px',
        padding: '0px',
    };

    return (
        <>
            <div style={backgroundStyle}>
                <h1 className='display-1'>
                    <strong>Good <span style={{ color: 'orange' }}>Pet</span></strong>
                </h1>
                <p className='lead'>Всё для счастливой жизни вашего питомца!</p>
            </div>
            <h1 className='h1 text-center mt-5'>Наши товары</h1>
            <Catalog />
        </>
    );
};

export default Home;
