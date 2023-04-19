import { Container } from './styles';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior:'smooth',
  })
}


export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <Container>
      <div className='container'>
        <button type='button' onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineGithub
            onClick={ () => handleRedirect('https://github.com/ElyonOrtiz') }
          />
          <AiOutlineLinkedin
            onClick={ () => handleRedirect('https://www.linkedin.com/in/elyon-ortiz-888845243/') }
          />
        </section>
      </div>
    </Container>
  );
}
