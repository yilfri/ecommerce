import Link from 'next/link';
import Search from './Search';

const Header = () => {
	return (
		<div>
			<Link href="/">
				<a>Home</a>
			</Link>

			<Search />

			<Link href="/cart">
				<a>Carrito de Compras</a>
			</Link>
		</div>
	);
};

export default Header;
