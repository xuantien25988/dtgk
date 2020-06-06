import dtgk from '../api/dienthoaigiakhoAPI';
import React from 'react';

class GetProducts extends React.Component {
	constructor() {
		super();
		this.state = { products: [] };
	}
	getProdducts = async () => {
		console.log('flag');
		const respone = await dtgk.get('/layouts/apple-watch-gia-re-vo-dich');
		this.setState({ products });
		console.log(respone);
	};
}

export default GetProducts;
