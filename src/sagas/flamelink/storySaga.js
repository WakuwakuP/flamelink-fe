import { flamelinkApp, db } from "../../firebase";
import { call, put, take, takeEvery, select } from "@redux-saga/core/effects";

import Actions from '../../actions';
import * as types from '../../constants/ActionTypes';


function* getStoriesSaga() {
  const stories = yield flamelinkApp.content.get({
    schemaKey: 'story',
  });
  yield put(Actions.setStories(stories));
}

export default [
  takeEvery(types.DATA.GET_STORIES, getStoriesSaga),
]
