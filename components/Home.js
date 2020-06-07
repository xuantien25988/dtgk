import React from 'react';
import style from './scss/Home.module.scss';

const Home = () => {
	return (
		<div className={style.sale_container}>
			<div className={style.banner}>
				<img
					src="https://cdn.dienthoaigiakho.vn/photos/1589874672064-applewatch-min.jpg"
					alt="sale-banner"
				/>
			</div>
		</div>
	);
};
export default Home;
