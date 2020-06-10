import FetchData from '../api/dienthoaigiakhoAPI';

const GetCategories = () => {
	return FetchData.get('/categories');
};
const GetLayouts = (layoutName) => {
	return FetchData.get(`/layouts/${layoutName}`);
};
const GetFooter = () => {
	return FetchData.get('/home/footer');
};

export { GetCategories, GetLayouts, GetFooter };
