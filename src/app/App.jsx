import AuthPage from '../pages/AuthPage';
import Registration from '../pages/RegistrationPage';
import ProductPage from '../pages/ProductPage';
import Cart from '../components/Cart';
import Home from '../pages/HomePage';
import Layout from '../components/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import FeedbackPage from '../pages/FeedbackPage';
import CheckoutPage from '../pages/CheckoutPage';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import { ThemeProvider } from '../contexts/ThemeContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SupabaseProvider } from '../contexts/SupabaseContext';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout></Layout>}>
                            <Route path='/auth' element={<AuthPage></AuthPage>} />
                            <Route path='/registration' element={<Registration></Registration>} />
                            <Route index path='/home' element={<Home></Home>}></Route>
                            <Route path='/product/:id' element={<ProductPage></ProductPage>}></Route>
                            <Route path='/feedback' element={<FeedbackPage></FeedbackPage>}></Route>
                            <Route path='/checkout' element={<CheckoutPage></CheckoutPage>}></Route>
                            <Route path='/account' element={<AccountPage></AccountPage>}></Route>
                            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
