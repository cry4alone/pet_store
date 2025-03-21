import { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Настройки Supabase
const supabaseUrl = 'https://ixtninhgpcfqjvtkenjw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dG5pbmhncGNmcWp2dGtlbmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY0NzMsImV4cCI6MjA1NzQzMjQ3M30.jU-ctajiyxn91dzvA4aMMtc9smb-44ujPDCx5vs8lUc';

// Создание клиента Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Создание контекста
export const SupabaseContext = createContext();

// Провайдер контекста
export const SupabaseProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    // Попытка загрузить данные из localStorage
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Сохранение данных в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const contextValue = {
    supabase,
    products,
    setProducts,
  };

  return (
    <SupabaseContext.Provider value={contextValue}>
      {children}
    </SupabaseContext.Provider>
  );
};