
import {  FaCss3Alt, FaReact, FaJava, FaNodeJs, } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SectionTitle } from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';


export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="conhecimentos"/>
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5/>}/>
        <ConhecimentoItem title='CSS'  icon={<FaCss3Alt/>}/>
        <ConhecimentoItem title='React' icon={<FaReact/>}/>
        <ConhecimentoItem title='Node' icon={<FaNodeJs/>}/>
        <ConhecimentoItem title='JAVA' icon={<FaJava/>}/>
      </section>
    </Container>
  );
}
