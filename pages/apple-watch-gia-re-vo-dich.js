import Sale from '../components/Sale.js';

import { GetLayouts } from '../repositories/GetDataFromAPI';

function Index({ layouts, metadata }) {
	return (
		<div>
			<Sale layout={layouts} metadata={metadata} />
		</div>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API

	const layoutsData = await GetLayouts('apple-watch-gia-re-vo-dich');

	const layouts = layoutsData.data.data.layout;
	const metadata = layoutsData.data.metadata;

	// Pass data to the page via props
	return { props: { layouts, metadata } };
}

export default Index;
