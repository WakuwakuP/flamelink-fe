import '@firebase/firestore';
import { all } from "@redux-saga/core/effects";

import dataSagas from './flamelink';

export default function* rootSaga() {
  yield all([
    ...dataSagas,
  ]);
}
