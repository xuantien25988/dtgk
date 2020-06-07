import React from 'react';
import style from './scss/ProductCard.module.scss';

import StandardizePrice from '../repositories/StandardizePrice';

const ProductCard = ({ product }) => {
	const caculatePrice = () => {
		const discount = product.price - product.retailPrice;
		return StandardizePrice(discount);
	};

	const renderedAlert = () => {
		return <div className={style.alert}>Chỉ còn 0 sản phẩm duy nhất</div>;
	};

	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.sale_tag}>
					<img src="https://dienthoaigiakho.vn/935b9534bc5c2edd55745cdf854632cf.png" />
					<div className={style.sale_price}>giảm {caculatePrice()}đ</div>
				</div>

				<div className={style.product_photo}>
					<img src={product.productPhoto} />
				</div>

				<div className={style.product_detail}>
					<div className={style.product_name}>{product.name}</div>
					<div className={style.product_price}>
						<b>{StandardizePrice(product.retailPrice)}đ</b>
						<span>{StandardizePrice(product.price)}đ</span>
					</div>
				</div>
				<div />

				<div className={style.datmua_container}>
					{renderedAlert()}
					<div className={style.button_datmua}>Đặt Mua</div>
				</div>

				<div className={style.view_count}>
					<b>{product.viewCount}</b> lượt khách đã xem
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

//productPhoto
//name
//price
//retailPrice
//viewCount
