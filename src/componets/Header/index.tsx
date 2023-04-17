import NavLink from './NavLink';
import { Container } from './styles';

export function Header () {
  return(
    <Container>
      <ul>
        <NavLink title="HOME" path="/" />
        <NavLink title="PROJETOS" path="/projetos" />
      </ul>
    </Container>
  );
}

export default Header;
