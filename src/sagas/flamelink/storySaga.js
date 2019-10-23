import { flamelinkApp } from "../../firebase";
import { put, takeEvery } from "@redux-saga/core/effects";

import Actions from '../../actions';
import * as types from '../../constants/ActionTypes';


function* getStoriesSaga() {
  const stories = yield flamelinkApp.content.get({
    schemaKey: 'story',
    populate: [
      {
        field: 'author',
        populate: ['avatar']
      },
      'category',
      'author',
      'thumbnail',
    ],
  });
  yield put(
    Actions.setSortedStories(
      Object.keys(stories)
        .map(key => stories[key])
        .sort((a, b) => {
          const a_date = new Date(a.date);
          const b_date = new Date(b.date);
          return a_date < b_date ? -1 : 0;
        })
    )
  );

  console.log('start');
  yield put(Actions.setStories(stories));

}

export default [
  takeEvery(types.DATA.GET_STORIES, getStoriesSaga),
]
