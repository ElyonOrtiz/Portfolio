import { ProjetoContainer } from './styles';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';

export default function ProjetoItem(){
    return (
        <ProjetoContainer>
            <section>
                <div className='overlay'></div>
                <div className='text'>
                    <h1>Projeto01</h1>
                    <h2> -Website</h2>
                </div>
            </section>
            <button type='button'>
                <Link href="/projeto">
                    <a>
                        Ver mais <AiOutlineRightCircle/>
                    </a>
                </Link>
            </button>
        </ProjetoContainer>
    )
}