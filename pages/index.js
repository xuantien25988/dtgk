import Layout from '../layouts/Main.js';
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
			<div className="App">
				<Layout />
			</div>
		);
	}
}

export default Index;
