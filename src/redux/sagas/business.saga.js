import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBusiness() {
    try {
        // yield console.log('fetchBusiness saga wired!');
        const response = yield axios.get('/api/business');
        yield console.log('this is response from DB', response.data);
        yield put({type: 'SET_BUSINESS', payload: response.data})
    } catch(error) {
        console.log('error in fetchBusiness saga', error); 
    }
}

function* postBusiness(action) {
    try {
        // yield console.log('postBusiness saga wired!');
        yield console.log('this is action.payload:', action.payload);
        const newBus = action.payload
        yield axios.post('/api/business', newBus);
        // GET after POST to display new list
        yield put({type: 'FETCH_BUSINESS'});
    } catch(error) {
        console.log('error in postBusiness', error);
    }
}

function* businessSaga() {
    yield takeLatest('FETCH_BUSINESS', fetchBusiness);
    yield takeLatest('POST_BUSINESS', postBusiness);
}

export default businessSaga;