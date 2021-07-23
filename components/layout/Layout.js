import Head from 'next/head';
import Navbar from './Navbar';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const Layout = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000000" />
			</Head>

			<Navbar />

			<main>{children}</main>
		</>
	);
};

export default Layout;
