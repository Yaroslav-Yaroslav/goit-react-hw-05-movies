import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => (
  <>
    <Header>
      <Container>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Container>
    </Header>
    <main>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
    <Toaster />
  </>
);
export default SharedLayout;
