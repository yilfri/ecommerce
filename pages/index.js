import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';

export default function Home() {
	return (
		<Layout title="FunKommerce" description="Tienda Online de Funko Pop">
			<Header />
		</Layout>
	);
}
