import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>

			<main>{children}</main>
		</>
	);
};

export default Layout;
