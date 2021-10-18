import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postFav(action) {
    try {
        yield console.log('postFav saga wired!');
        

    } catch(error) {
        console.log('error in adding favorite', error);
        
    }
}

function* favoriteSaga() {
    yield takeLatest('POST_FAVORITE', postFav)
}

export default favoriteSaga;