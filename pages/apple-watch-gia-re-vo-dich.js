import PromotionPage from '../layouts/PromotionPage.js';
import FetchData from '../api/dienthoaigiakhoAPI';
import React from 'react';

class Index extends React.Component {
	constructor() {
		super();
		this.state = { products: [] };
	}

	async componentDidMount() {
		const respone = await FetchData.get('/layouts/apple-watch-gia-re-vo-dich');
		this.setState({ products: respone });
	}

	render() {
		return (
			<div>
				<PromotionPage />
			</div>
		);
	}
}

export default Index;
