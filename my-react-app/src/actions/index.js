import materialsapi from '../apis/materialsapi';

export const fetchMaterials = () => async dispatch => {
  const response = await materialsapi.get('Materials');
  dispatch({type: 'FETCH_MATERIALS', payload: response.data})
};

// export const fetchMovie = (movieId) => async dispatch => {
//   const response = await synopsisapi.get('Movies/' + movieId)
//   dispatch({type: 'FETCH_MOVIE', payload: response.data})
// };

// export const fetchCategories = () => async dispatch => {
//   const response = await synopsisapi.get('MovieCategories');
//   dispatch({type: 'FETCH_CATEGORIES', payload: response.data})
// };

// export const FetchCategory = (categoryId) => async dispatch => {
//   const response = await synopsisapi.get('MovieCategories/' + categoryId)
//   dispatch({type: 'FETCH_CATEGORY', payload: response.data})
// };

export const selectMaterial = (material) => {
  return {
    type: 'MATERIAL_SELECTED',
    payload: material
  };
};
