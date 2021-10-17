import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBusiness() {
    try {
        // yield console.log('fetchBusiness saga wired!');
        const response = yield axios.get('/api/business');
        // yield console.log('this is response from DB', response.data);
        yield put({type: 'SET_BUSINESS', payload: response.data})
    } catch(error) {
        console.log('error in fetchBusiness saga', error); 
    }
}

function* postBusiness(action) {
    try {
        // yield console.log('postBusiness saga wired!');
        // yield console.log('this is action.payload:', action.payload);
        const newBus = action.payload
        yield axios.post('/api/business', newBus);
        // GET after POST to display updated list
        yield put({type: 'FETCH_BUSINESS'});
    } catch(error) {
        console.log('error in postBusiness', error);
    }
}

function* deleteBusiness(action) {
    try {
        yield console.log('deleteBusiness wired!');
        const busId = action.payload
        yield console.log('this is busId to delete: ', busId);
        yield axios.delete(`/api/business/${busId}`)
        // GET after DELETE to display updated list
        yield put({type: 'FETCH_BUSINESS'})
    } catch(error) {
        console.log('error in deleting business', error);
    }
}

function* businessSaga() {
    yield takeLatest('FETCH_BUSINESS', fetchBusiness);
    yield takeLatest('POST_BUSINESS', postBusiness);
    yield takeLatest('DELETE_BUSINESS', deleteBusiness);
}

export default businessSaga;