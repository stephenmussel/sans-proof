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
        yield console.log('fetchFav wired!');
        const response = yield axios.get('/api/favorite');
        yield console.log('this is the response', response.data);
        yield put({type: 'SET_FAVORITE', payload: response.data})

    } catch(error) {
        console.log('error if fetchFav', error);
        
    }
}

function* favoriteSaga() {
    yield takeLatest('POST_FAVORITE', postFav);
    yield takeLatest('FETCH_FAVORITE', fetchFav);
}

export default favoriteSaga;