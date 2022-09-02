import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addItem(action){
    try {
        yield axios.post('/api/shelf', action.payload);
        yield put({type: 'FETCH_ITEM'});
    } catch (error) {
        console.log('Error with user registration:', error);
    };

}//end of addItem worker saga

function* addItemSaga() {
    yield takeEvery('ADD_ITEM', addItem);

}//end of addItemSaga()

export default addItemSaga;