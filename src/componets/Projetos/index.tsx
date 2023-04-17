import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './projetoItem';
 

export function Projetos() {
  return (
    <Container>
      <SectionTitle title='Meus Projetos'/>
      <section>
        <ProjetoItem/>
        <Projetos/>
      </section>
    </Container>
  );
}
