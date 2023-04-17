import { ConhecimentoContainer } from './styles';

interface ConhecimentoProps {
  icon: object;
  title: string;

}

export default function ConhecimentoItem({ icon, title }: ConhecimentoProps) {
  return (
    <ConhecimentoContainer>
      <p> {title} </p>
      {icon}
    </ConhecimentoContainer>
  );
}
