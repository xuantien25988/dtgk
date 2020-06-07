import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import Sale from '../components/Sale.js';

import { GetCategories, GetLayouts, GetFooter } from '../repositories/GetDataFromAPI';

class PromotionPage extends React.Component {
	constructor() {
		super();
		this.state = { categories: [], layouts: [], metadata: [], footer: [] };
	}

	componentWillMount() {
		this.getInitialData();
	}

	async getInitialData() {
		const [ categories, layout, footer ] = await Promise.all([
			GetCategories(),
			GetLayouts(),
			GetFooter()
		]);
		this.setState({
			categories : categories.data.rows,
			layouts    : layout.data.data.layout,
			metadata   : layout.data.metadata,
			footer     : footer.data.articles
		});
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
