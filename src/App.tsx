import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </Link>

        <Link to="/" className="navbar-item is-active">
          Home
        </Link>

        <Link to="/users" className="navbar-item">
          Users
        </Link>

        <Link to="/posts" className="navbar-item">
          Posts
        </Link>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>;
}
