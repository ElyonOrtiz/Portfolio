import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../componets/Header';
import { HomeHero } from '../componets/HomeHero';
import {Experiencias} from '../componets/Experiencias';
import { Projetos } from '../componets/Projetos';
import { Conhecimentos } from '../componets/Conhecimentos';
import { FormContato } from '../componets/FormContato';
import { Footer } from '../componets/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos/>
        <Conhecimentos/>
        <FormContato/>
        <Footer/>
      </main>
    </HomeContainer>
  );
}
