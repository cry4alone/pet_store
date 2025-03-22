import React, { useState, useContext, useEffect, Suspense } from 'react';
import { SupabaseContext } from '../contexts/SupabaseContext';

const ProductPreview = React.lazy(() => import('../components/ProductPreview'));

const Catalog = () => {
    const { supabase, products, setProducts } = useContext(SupabaseContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data, error } = await supabase.from('products').select('*');
            if (error) {
                console.error(error.message);
                return;
            }
            setProducts(data);
        };
        getProducts();
    }, [supabase, setProducts]);

    useEffect(() => {
        const getCategories = async () => {
            const { data, error } = await supabase.from('category').select('*');
            if (error) {
                console.error(error.message);
                return;
            }
            setCategories(data);
        };
        getCategories();
    }, [supabase]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory ? product.category_id === parseInt(selectedCategory, 10) : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div className='container d-flex gap-2 m-3 mx-auto w-50'>
                <div className='input-group mb-3'>
                    <span className='input-group-text'>
                        <i className='bi bi-search'></i>
                    </span>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Поиск...'
                        aria-label='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className='dropdown'>
                    <button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                    >
                        Категории
                    </button>
                    <ul className='dropdown-menu'>
                        <li>
                            <a className='dropdown-item' href='#' onClick={() => setSelectedCategory('')}>
                                Все категории
                            </a>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <a
                                    className='dropdown-item'
                                    href='#'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedCategory(category.id.toString());
                                    }}
                                >
                                    {category.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='container d-flex flex-wrap justify-content-center'>
                <Suspense fallback={<div><h1>Загрузка</h1></div>}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => <ProductPreview key={product.id} product={product} />)
                    ) : (
                        <p className='text-center'>Ничего не найдено.</p>
                    )}
                </Suspense>
            </div>
        </>
    );
};

export default Catalog;
