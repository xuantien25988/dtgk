import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import Sale from '../components/Sale.js';

import FetchData from '../api/dienthoaigiakhoAPI';

class Main extends React.Component {
	constructor() {
		super();
		this.state = { categories: [], layouts: [], footer: [] };
		this.getCategories();
		this.getSaleProducts();
		this.getFooter();
	}

	async getCategories() {
		const respone = await FetchData.get('/categories');
		this.setState({ categories: respone.data.rows });
	}

	async getSaleProducts() {
		const respone = await FetchData.get('/layouts/apple-watch-gia-re-vo-dich');
		this.setState({ layouts: respone.data.data.layout });
	}

	async getFooter() {
		const respone = await FetchData.get('/home/footer');
		this.setState({ footer: respone.data.articles });
	}
	render() {
		return (
			<div>
				<header>
					<Header />
				</header>
				<NavigationBar categories={this.state.categories} />
				<style jsx global>{`
					body {
						margin: 0px;
						padding: 0px;
					}
				`}</style>

				<main>
					<Sale layouts={this.state.layouts} />
				</main>

				<Footer footer={this.state.footer} />
			</div>
		);
	}
}

export default Main;
