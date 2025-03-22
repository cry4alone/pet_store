# Good Pet ✨
![Иллюстрация к проекту](https://github.com/cry4alone/pet_store/blob/master/src/assets/logo.png)

**Good Pet** — это современный интернет-магазин, созданный с использованием **React** и **Vite**, для всех, кто заботится о своих питомцах.

## Технологии

### Основной стек:
- **React**: Библиотека для создания пользовательского интерфейса.
- **Vite**: Современный инструмент для быстрой разработки и сборки приложений.
- **JS**: Легковесный интерпретируемый (или JIT-компилируемый) язык программирования

### Доступные плагины Vite:
1. [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Использует **Babel** для быстрой перезагрузки компонентов.
2. [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Использует **SWC** для еще более быстрой перезагрузки.

---

## Как начать работу с проектом

1. **Клонируйте репозиторий**:
```bash
   git clone https://github.com/your-repo/good-pet.git
   cd good-pet
```

2. **Установите зависимости**:
```bash
   npm install
```

3. **Запустите проект в режиме разработки**:
```bash
   npm run dev
```

4. **Создайте production-сборку**:
```bash
   npm run build
```

5. **Проверьте сборку локально**:
```bash
   npm run preview
```

---

## Расширение функционала

### 1. Подключение Supabase или Firebase
Для управления базой данных товаров, корзиной и пользователями рекомендуется использовать:
- **Supabase**: Открытая альтернатива Firebase с поддержкой PostgreSQL.
- **Firebase**: Популярное решение для хранения данных и аутентификации.

---

## Структура проекта
```
rusal/
├── src/
│   ├── app/       # App.jsx и глобальные стили
│   ├── components/       # Переиспользуемые компоненты (например, ProductCard, CartItem)
│   ├── assets/           # Статические файлы (изображения, иконки)
│   ├── contexts/         # Контексты для управления состоянием (например, CartContext)
│   ├── pages/            # Страницы приложения (например, Catalog, Checkout)
│   └── main.jsx          # Точка входа в приложение
├── vite.config.js        # Конфигурация Vite
├── package.json          # Зависимости и скрипты
└── README.md             # Этот файл
```

