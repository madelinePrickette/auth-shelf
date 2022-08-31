import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addItem(){
    try {
        yield axios.post('', action.payload);
    } catch (error) {
        console.log('Error with user registration:', error);
    };

}//end of addItem worker saga

function* addItemSaga() {
    yield takeEvery('ADD_ITEM', addItem);

}//end of addItemSaga()

export default addItemSaga;