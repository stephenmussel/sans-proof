import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postFav(action) {
    try {
        yield console.log('postFav saga wired!');
        console.log('this is busID to add to favorite table: ', action.payload);
        const favId = action.payload
        yield axios.post(`/api/favorite/${favId}`);
        // will need to GET when displaying fav in profile
    } catch(error) {
        console.log('error in adding favorite', error);  
    }
}

function* fetchFav() {
    try {
        // yield console.log('fetchFav wired!');
        const response = yield axios.get('/api/favorite');
        // yield console.log('this is the response', response.data);
        yield put({type: 'SET_FAVORITE', payload: response.data})

    } catch(error) {
        console.log('error if fetchFav', error);  
    }
}

function* deleteFav(action) {
    try {
        // console.log('deleteFav saga wired!');
        const favId = action.payload;
        // yield console.log('this is favId to delete', favId);
        yield axios.delete(`/api/favorite/${favId}`);
        // GET after DELETE to display updated list
        yield put({type: 'FETCH_FAVORITE'});
    } catch(error) {
        console.log('error in deleting favorite', error);
    }
}

function* updateNotes(action) {
    yield console.log('editFav saga wired!');
    console.log('this is action.payload', action.payload);
    
    const favEdits = action.payload;
    
}

function* favoriteSaga() {
    yield takeLatest('POST_FAVORITE', postFav);
    yield takeLatest('FETCH_FAVORITE', fetchFav);
    yield takeLatest('DELETE_FAVORITE', deleteFav);
    yield takeLatest('UPDATE_NOTES', updateNotes);
}

export default favoriteSaga;