import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSelectedDetails(action) {
    try {
        // yield console.log('fetchSelectedDetails saga wired!');
        // yield console.log('this is selected business ID ', action.payload);
        const businessId = action.payload;
        const selectedDetails = yield axios.get(`/api/business/${businessId.id}`);
        // console.log('this is selectedDetails: ', selectedDetails.data);
        // "dispatches" to details reducer
        yield put({type: 'SET_DETAILS', payload: selectedDetails.data})
    } catch(error) {
        console.log('error in fetchSelectedDetails', error);
        
    }
}

function* detailsSaga() {
    yield takeLatest('FETCH_DETAILS', fetchSelectedDetails);
}

export default detailsSaga;