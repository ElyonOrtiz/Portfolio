import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../componets/Header';
import { HomeHero } from '../componets/HomeHero';
import Experiencias from '../componets/Experiencias';
import { Projetos } from '../componets/Projetos';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos/>
      </main>
    </HomeContainer>
  );
}
