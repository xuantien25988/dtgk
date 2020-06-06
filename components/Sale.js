import React from 'react';
import style from './scss/Sale.module.scss';
import Countdown from 'react-countdown-now';
import ProductList from './ProductList';

const Sale = ({ layouts }) => {
	const renderedCountdown = ({ hours, minutes, seconds, completed }) => {
		return (
			<div className={style.flexBlock}>
				<div className={style.item}>
					<div>{hours}</div>
					<span>GIỜ</span>
				</div>{' '}
				:
				<div className={style.item}>
					<div>{minutes}</div>
					<span>PHÚT</span>
				</div>:
				<div className={style.item}>
					<div>{seconds}</div>
					<span>GIÂY</span>
				</div>
			</div>
		);
	};

	const renderedProductList = layouts.map((layout) => {
		return (
			<div>
				<div className={style.layoutBanner}>
					<img src={layout.name} />
				</div>
				<ProductList products={layout._products} />
			</div>
		);
	});

	return (
		<div className={style.saleContainer}>
			<div className={style.banner}>
				<img
					src="https://cdn.dienthoaigiakho.vn/photos/1589874672064-applewatch-min.jpg"
					alt="sale-banner"
				/>
			</div>
			<div className={style.countDown}>
				<div className={style.title}>ƯU ĐÃI CHỈ CÒN TRONG</div>
				<Countdown date={Date.now() + 1000000000} renderer={renderedCountdown} />
			</div>
			<div className={style.productList}>{renderedProductList}</div>
			<div className={style.share}>share</div>
		</div>
	);
};
export default Sale;
