import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import Sale from '../components/Sale.js';

import FetchData from '../api/dienthoaigiakhoAPI';

class PromotionPage extends React.Component {
	constructor() {
		super();
		this.state = { categories: [], layouts: [], metadata: [], footer: [] };
		this.getCategories();
		this.getSaleProducts();
		this.getMetaData();
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

	async getMetaData() {
		const respone = await FetchData.get('/layouts/apple-watch-gia-re-vo-dich');
		this.setState({ metadata: respone.data.metadata });
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

				<main>
					<Sale layouts={this.state.layouts} metadata={this.state.metadata} />
				</main>

				<Footer footer={this.state.footer} />
				<style jsx global>{`
					body {
						margin: 0px;
						padding: 0px;
					}
				`}</style>
			</div>
		);
	}
}

export default PromotionPage;
