import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import FetchData from '../api/dienthoaigiakhoAPI';

class HomePage extends React.Component {
	constructor() {
		super();
		this.state = { categories: [], layouts: [], metadata: [], footer: [] };
		this.getCategories();
	}
	async getCategories() {
		const respone = await FetchData.get('/categories');
		this.setState({ categories: respone.data.rows });
	}
	render() {
		return (
			<div>
				<header>
					<Header />
				</header>
				<NavigationBar categories={this.state.categories} />

				<main>
					<Home />
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

export default HomePage;
