import { useRouter } from 'next/router';
import Link from 'next/link';

//Prime React Components.
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';

import styled from 'styled-components';
/* import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.css'; */

const Header = () => {
	const router = useRouter();

	const items = [
		{
			label: 'Inicio',
			icon: 'pi pi-fw pi-home',
			command: (e) => {
				router.push('/');
			}
		},
		{
			label: 'Carrito',
			icon: 'pi pi-fw pi-shopping-cart',
			command: (e) => {
				router.push('/cart');
			}
		},
		{
			label: 'Historial de compras',
			icon: 'pi pi-fw pi-chart-line',
			command: (e) => {
				router.push('/');
			}
		}
	];

	const start = (
		<Link href="/">
			<Logo>
				Fun<span>Kommerce</span>
			</Logo>
		</Link>
	);

	const end = <InputText placeholder="Buscar" type="text" />;

	return (
		<>
			<div className="card">
				<Menubar model={items} start={start} end={end} />
			</div>
		</>
	);
};

const Logo = styled.a`
	font-weight: bold;
	cursor: pointer;

	span {
		color: green;
	}
`;

export default Header;
