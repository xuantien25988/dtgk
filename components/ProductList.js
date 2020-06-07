import React from 'react';

import ProductCard from './ProductCard';
import style from './scss/ProductList.module.scss';

const ProductList = ({ products }) => {
	const [ spacing ] = React.useState(1);

	return (
		<div className={style.list_container}>
			<div className={style.grid_container}>
				{products.map((product) => <ProductCard product={product} />)}
			</div>
		</div>
	);
};

export default ProductList;
