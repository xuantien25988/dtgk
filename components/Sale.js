import React from 'react';
import style from './scss/Sale.module.scss';
import Countdown from 'react-countdown-now';
import ProductList from './ProductList';

const Sale = ({ layout, metadata }) => {
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

	const renderedProductList = layout.map((layout) => {
		if (layout._products.length !== 0) {
			return (
				<div>
					<div className={style.layout_banner}>
						<img src={layout.name} />
					</div>
					<ProductList products={layout._products} />
				</div>
			);
		}
	});

	return (
		<div className={style.sale_container}>
			<div className={style.banner}>
				<img
					src="https://cdn.dienthoaigiakho.vn/photos/1589874672064-applewatch-min.jpg"
					alt="sale-banner"
				/>
			</div>
			<div className={style.count_down}>
				<div className={style.title}>ƯU ĐÃI CHỈ CÒN TRONG</div>
				<Countdown date={Date.now() + 1000000000} renderer={renderedCountdown} />
			</div>
			<div className={style.product_list}>{renderedProductList}</div>
			<div className={style.metadata}>
				<div
					className={style.content}
					dangerouslySetInnerHTML={{ __html: metadata.content }}
				/>
			</div>
			<div className={style.share}>Share Button</div>
		</div>
	);
};
export default Sale;
