import { flamelinkApp } from "../../firebase";
import { all, put, takeEvery, select } from "@redux-saga/core/effects";

import { getStoryId, getSortedStories } from '../selector';
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

  const sortedStories = Object.keys(stories)
    .map(key => stories[key])
    .sort((a, b) => {
      const a_date = new Date(a.date);
      const b_date = new Date(b.date);
      return a_date < b_date ? 1 : -1;
    });
  yield put(Actions.setSortedStories(sortedStories));


  yield put(Actions.setStories(stories));
  const storyId = yield select(getStoryId);
  if (storyId !== '') {
    yield put(Actions.setStorySaga(storyId));
  }
}

function* setStorySaga(actions) {
  yield put(Actions.setStory(actions.payload.storyId));

  yield all([
    put(Actions.setNextStorySaga()),
    put(Actions.setPrevStorySaga()),
  ])
}

function* setPrevStorySaga() {
  const storyId = yield select(getStoryId);
  const sortedStories = yield select(getSortedStories);
  const index = sortedStories.findIndex((story) => story.id === storyId);

  if (index < 0) {
    return;
  }

  if (index < sortedStories.length) {
    const prevStory = getStoryData(sortedStories[index + 1]);
    yield put(Actions.setPrevStory(prevStory));
  } else {
    yield put(Actions.setPrevStory(null));
  }
}

function* setNextStorySaga() {
  const storyId = yield select(getStoryId);
  const sortedStories = yield select(getSortedStories);
  const index = sortedStories.findIndex((story) => story.id === storyId);

  if (index < 0) {
    return;
  }

  if (0 < index) {
    const nextStory = getStoryData(sortedStories[index - 1]);
    yield put(Actions.setNextStory(nextStory));
  } else {
    yield put(Actions.setNextStory(null));
  }
}

function getStoryData(story) {
  const date = new Date(story.date);
  return {
    title: story.title,
    author: story.author.displayName,
    url: `/story/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${story.id}`,
  };
}



export default [
  takeEvery(types.DATA.GET_STORIES, getStoriesSaga),
  takeEvery(types.DATA.SET_STORY_SAGA, setStorySaga),
  takeEvery(types.DATA.SET_NEXT_STORY_SAGA, setNextStorySaga),
  takeEvery(types.DATA.SET_PREV_STORY_SAGA, setPrevStorySaga),
]
