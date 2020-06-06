import React from 'react';
import style from './scss/DropdownList.module.scss';

const NavigationTab = ({ categories }) => {
	const renderedDropdownList = (tag) => {
		let ul = [];
		categories.map((category) => {
			if (category.uri === tag) {
				category.brands.map((brand, index) => {
					if (brand.subCategories.length > 0) {
						let li = [];
						brand.subCategories.map((sub) => {
							li.push(<li>{sub.name}</li>);
						});
						ul.push(<ul>{brand.name}</ul>);
						ul.push(<ul>{li}</ul>);
					} else {
						ul.push(<ul>{brand.name}</ul>);
					}
				});
			}
		});
		return ul;
	};

	// const images = props.images.map((image) => {
	// 	return <ImageCard key={image.id} image={image} />;
	// });
	// return <div className="photo-grid">{images}</div>;

	return (
		<div className={style.navigation_container}>
			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.dienthoai} />
					<div>ĐIỆN THOẠI</div>
				</a>
				<div className={style.dropdown_content}>
					{renderedDropdownList('dien-thoai')}
				</div>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.dongho} />
					<div>ĐỒNG HỒ</div>
				</a>
				<div className={style.dropdown_content}>
					{renderedDropdownList('dong-ho')}
				</div>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.ipad} />
					<div>APPLE IPAD</div>
				</a>
				<div className={style.dropdown_content}>
					{renderedDropdownList('may-tinh-bang')}
				</div>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.macbook} />
					<div>MACBOOK</div>
				</a>
				<div className={style.dropdown_content}>
					{renderedDropdownList('laptop')}
				</div>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.phukien} />
					<div>PHỤ KIỆN</div>
				</a>
				<div className={style.dropdown_content}>
					{renderedDropdownList('phu-kien')}
				</div>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.dienthoaire} />
					<div>CŨ GIÁ RẺ</div>
				</a>
				<div className={style.dropdown_content}>
					{renderedDropdownList('dien-thoai-re')}
				</div>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.tragop} />
					<div>TRẢ GÓP</div>
				</a>
			</div>

			<div className={style.dropdown}>
				<a className={style.navigation_tab}>
					<img className={style.khuyenmai} />
					<div>TIN KHUYẾN MÃI</div>
				</a>
			</div>
		</div>
	);
};

export default NavigationTab;
