import FetchData from '../api/dienthoaigiakhoAPI';

const GetCategories = () => {
	return FetchData.get('/categories');
};
const GetLayouts = () => {
	return FetchData.get('/layouts/apple-watch-gia-re-vo-dich');
};
const GetFooter = () => {
	return FetchData.get('/home/footer');
};

export { GetCategories, GetLayouts, GetFooter };
