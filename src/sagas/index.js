import '@firebase/firestore';
import { all } from "@redux-saga/core/effects";

// import Actions from '../actions';
// import * as types from '../constants/ActionTypes';

import dataSagas from './flamelink';

export default function* rootSaga() {
  yield all([
    ...dataSagas,
  ]);
}
