import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSelectedDetails(action) {
    try {
        yield console.log('fetchSelectedDetails saga wired!');
        

    } catch(error) {
        console.log('error in fetchSelectedDetails', error);
        
    }
}