import { combineReducers } from 'redux';
import materialsReducer from './materialsReducer';

const selectedMaterialsReducer = (selectedMaterials = null, action) => {
    if (action.type === 'MOVIE_SELECTED') {
        return action.payload;
    }
    return selectedMaterials
}

// const MovieReducer = (fetchedMovie = null, action) => {
//     if (action.type === 'FETCH_MOVIE') {
//         return action.payload;
//     }
//     return fetchedMovie;
// }


export default combineReducers ({
    materials: materialsReducer,
    // selectedMovie: selectedMovieReducer,
    // movie: MovieReducer,
    // categories: CategoriesReducer,
    // category: CategoryReducer
});