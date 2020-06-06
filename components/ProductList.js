import React from 'react';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
	const [ spacing ] = React.useState(1);

	return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={spacing}>
						{products.map((product) => (
							<Grid key={product.id} item>
								<ProductCard product={product} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductList;
