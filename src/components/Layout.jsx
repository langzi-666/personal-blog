import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            我的博客
          </Link>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'nav-link active' : 'nav-link'}
              >
                首页
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              >
                关于我
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={isActive('/portfolio') ? 'nav-link active' : 'nav-link'}
              >
                作品集
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              >
                联系我
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 我的个人博客. 保留所有权利.</p>
      </footer>
    </div>
  )
}

export default Layout

