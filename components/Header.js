import style from './scss/Header.module.scss';

import { FaSearch } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';

export default () => (
	<div className={style.header}>
		<div className={style.header_container}>
			<a className={style.headerLogo} href="/">
				<img
					className={style.logo}
					src="https://dienthoaigiakho.vn/d2f80ef6b90a0731ab20d52f11c8cbf9.png"
				/>
			</a>

			<form className={style.header_search}>
				<div>
					<FaSearch className={style.button_search} />
				</div>
				<input
					className={style.input_field}
					type="text"
					placeholder="Tìm trên GIÁ KHO - Gọi 19008922."
					onChange={(event) => {}}
				/>
			</form>

			<div className={style.header_hotline}>HOTLINE 1900-8922</div>
			<div className={style.header_cart}>
				<GrCart />
				<div className={style.cart}>GIỎ HÀNG</div>
			</div>
		</div>
	</div>
);
