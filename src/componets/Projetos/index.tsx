import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './projetoItem';
import Link from 'next/link';
 

export function Projetos() {
  return (
    <Container>
      <SectionTitle title='Meus Projetos'/>
      <section>
        <ProjetoItem img='https://neilpatel.com/wp-content/uploads/2019/11/aplicativos-para-teste-de-site-com-design-responsi.jpeg' 
        title='Projeto 01'
        slug="teste"
        type='Website'/>
        
        <ProjetoItem img='https://neilpatel.com/wp-content/uploads/2019/11/aplicativos-para-teste-de-site-com-design-responsi.jpeg' 
        title='Projeto 02'
        slug='/projetos2'
        type='Website'/>
    
        <ProjetoItem img='https://neilpatel.com/wp-content/uploads/2019/11/aplicativos-para-teste-de-site-com-design-responsi.jpeg' 
        title='Projeto 02'
        slug='/projetos2'
        type='Website'/>
      </section>    
      <button type='button'>
        <Link href="/projetos">
          <a> Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
