import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: Props) {
  const router = useRouter();
  const isActive: boolean = router.pathname === path;
  console.log(router.pathname);
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
