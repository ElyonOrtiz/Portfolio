import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';


  
const today = new Date();
const initDate = new Date("2023/1/6");
let timeElepsed = today.getFullYear() - initDate.getFullYear();
const month = today.getMonth() - initDate.getMonth();
if(today.getMonth() < initDate.getMonth() || (today.getMonth() == initDate.getMonth() && today.getDate() < initDate.getDate())){
  timeElepsed --;
}
let title;

if(timeElepsed == 0){
  title = month + " meses"
}if( timeElepsed == 1 ){
  title = timeElepsed + " Ano"
}if(timeElepsed > 1){
  title = timeElepsed + " Anos"
}


export function Experiencias() {
  return (
    <Container>
      <SectionTitle title={title}  description="de Experiência" />
      <section>
        {/* <ExperienciaItem title='Mobile' year='2022' description='Realizei o curso de capacitação da motorola para desenvolver sistemas operacionais embarcados e sofwares de despositivos moveis, obtive conhecimentos sobre programação orientado a objeto, JAVA, e desonvolvimento mobile.'/> */}
        <ExperienciaItem year='2023' title='Web' description='Estagiando na Prefeitura de Porto velho como Dev junior Full-Stack, onde aprendi como funciona o desenvolvimento web, banco de dados, HTML, CSS, typeScript, Node, React, MatirialUi e NextJs.  '/>
      </section>
    </Container>
  );
}
1;

export default Experiencias;
