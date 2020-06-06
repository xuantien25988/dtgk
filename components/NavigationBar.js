import React from 'react';
import DropdownList from './DropdownList';

import style from './scss/NavigationBar.module.scss';

const NavigationBar = ({ categories }) => {
	return (
		<div className={style.navigationBar}>
			<DropdownList categories={categories} />
		</div>
	);
};

export default NavigationBar;
