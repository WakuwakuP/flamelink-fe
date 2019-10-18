import * as types from '../constants/ActionTypes';

// ストーリーのリストをストアに登録する
function setStories(stories) {
  return {
    type: types.DATA.SET_STORIES,
    payload: {
      stories
    },
  }
}

// ストーリーのリストを取得する
function getStories() {
  return {
    type: types.DATA.GET_STORIES,
  }
}

export default {
  getStories,
  setStories,
}
