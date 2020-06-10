import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Layout = ({ children, categories }) => (
	<div>
		<Header />
		<NavigationBar categories={categories} />

		<main>{children}</main>

		<Footer />

		<style jsx global>{`
			*,
			*::before,
			*::after {
				margin: 0px;
				padding: 0px;
			}
		`}</style>
	</div>
);

export default Layout;
