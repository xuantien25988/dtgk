import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import getPrice from '../repositories/GetPrice';

import style from './scss/ProductCard.module.scss';

const useStyles = makeStyles(() => ({
	paper : {
		height : 380,
		width  : 195
	}
}));

const ProductCard = ({ product }) => {
	const classes = useStyles();

	const caculatePrice = () => {
		const discount = product.price - product.retailPrice;
		return getPrice(discount);
	};

	const renderedAlert = () => {
		return <div className={style.alert}>Chỉ còn 0 sản phẩm duy nhất</div>;
	};

	return (
		<Paper className={classes.paper}>
			<div className={style.wrapper}>
				<div className={style.container}>
					<div className={style.saleTag}>
						<img src="https://dienthoaigiakho.vn/935b9534bc5c2edd55745cdf854632cf.png" />
						<div className={style.salePrice}>giảm {caculatePrice()}đ</div>
					</div>

					<div className={style.productPhoto}>
						<img src={product.productPhoto} />
					</div>

					<div className={style.productDetail}>
						<div className={style.productName}>{product.name}</div>
						<div className={style.productPrice}>
							<b>{getPrice(product.retailPrice)}đ</b>
							<span>{getPrice(product.price)}đ</span>
						</div>
					</div>
					<div />

					<div className={style.btnDatmua}>
						{renderedAlert()}
						<Button>Đặt Mua</Button>
					</div>

					<div className={style.viewCount}>
						<b>{product.viewCount}</b> lượt khách đã xem
					</div>
				</div>
			</div>
		</Paper>
	);
};

export default ProductCard;

//productPhoto
//name
//price
//retailPrice
//viewCount
