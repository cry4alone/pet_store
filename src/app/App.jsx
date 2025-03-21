import AuthPage from '../pages/AuthPage';
import Registration from '../pages/RegistrationPage';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import NotFoundPage from '../pages/NotFoundPage';

import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route path='/auth' element={<AuthPage></AuthPage>} />
                    <Route path='/registration' element={<Registration></Registration>} />
                    <Route path='/product/:id' element={<Product></Product>}></Route>
                    <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
