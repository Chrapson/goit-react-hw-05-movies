import { Suspense } from 'react';
import { Container, Header, Link } from '../SharedHeader/SharedHeader.styled';
import { Outlet } from 'react-router-dom';

const SharedHeader = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedHeader;
