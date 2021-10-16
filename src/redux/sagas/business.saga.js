import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBusiness() {
    try {
        yield console.log('fetchBusiness saga wired!');
        

    } catch(error) {
        console.log('error in fetchBusiness saga', error);
        
    }
}

function* businessSaga() {
    yield takeLatest('FETCH_BUSINESS', fetchBusiness);
}

export default businessSaga;