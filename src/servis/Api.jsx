import axios from 'axios';
import PropTypes from 'prop-types';

const API_URL = 'https://pixabay.com/api/';

const API_KEY = '28235819-d60a9d1543261a6c36de31755';

export default async function getPictures(search, page) {
  const API_PARAMS = {
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };
  const response = await axios.get(API_URL, {
    params: API_PARAMS,
  });
  console.log(response.data);
  return response.data;
}

getPictures.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
