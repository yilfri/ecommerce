import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>

			<Navbar />

			<main>{children}</main>
		</>
	);
};

export default Layout;
