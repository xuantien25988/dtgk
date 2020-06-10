import React from 'react';
import App from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { GetCategories } from '../repositories/GetDataFromAPI';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<MainLayout categories={this.props.categories}>
				<Component {...pageProps} />
			</MainLayout>
		);
	}
}

MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const categoriesData = await GetCategories();
	const categories = categoriesData.data.rows;

	return {
		categories : categories
	};
};

export default MyApp;
