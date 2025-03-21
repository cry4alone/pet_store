import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app/index.scss';
import { CartProvider } from './contexts/CartContext';
import { SupabaseProvider } from './contexts/SupabaseContext';

createRoot(document.getElementById('root')).render(
        <SupabaseProvider>
            <CartProvider>
                <App></App>
            </CartProvider>
        </SupabaseProvider>
);
