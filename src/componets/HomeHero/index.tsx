import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/fotoMinha.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Eu sou o Elyon</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue">Elyon,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Ortiz,</span>
            </div>
            {'\u007d'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007b'}
            <div>
              Função: <span className="blue">Dev Full-stack,</span>
            </div>
            <div>
              Empresa: <span className="blue">Prefeitura de Porto Velho,</span>
            </div>
            {'\u007d'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
