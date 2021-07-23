import Layout from '../components/layout/Layout';

// Style Components
import { Title, NoItems } from '../components/ui/cartStyles';

const History = () => {
	return (
		<Layout
			title="FunKommerce | Carrito de compras"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<Title>Historial de compras</Title>

				<NoItems>No has realizado ninguna compra</NoItems>
			</>
		</Layout>
	);
};

export default History;
