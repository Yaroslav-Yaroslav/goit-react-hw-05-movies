import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => (
  <div>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <div>
      <Toaster />
    </div>
  </div>
);
export default SharedLayout;
