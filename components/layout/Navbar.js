import { useRouter } from 'next/router';

//Prime React Components.
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import 'primeicons/primeicons.css';
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

	const end = <InputText placeholder="Buscar" type="text" />;

	return (
		<>
			<div className="card">
				<Menubar model={items} end={end} />
			</div>
		</>
	);
};

export default Header;
