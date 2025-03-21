import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Главная</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/catalog">Каталог</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">Корзина</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    // <nav>
    //     <ul>
    //         <li><a href="/">Главная</a></li>
    //         <li><a href="/catalog">Каталог</a></li>
    //         <li><a href="/cart">Корзина</a></li>
    //     </ul>
    // </nav>
  )
}

export default Header