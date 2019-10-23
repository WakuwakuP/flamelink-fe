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

function setSortedStories(sortedStories) {
  return {
    type: types.DATA.SET_SORTED_STORIES,
    payload: {
      sortedStories
    },
  }
}

// ストーリーのリストを取得する
function getStories() {
  return {
    type: types.DATA.GET_STORIES,
  }
}

// 表示するストーリーをセットする。
function setStory(storyId) {
  return {
    type: types.DATA.SET_STORY,
    payload: {
      storyId,
    },
  }
}

export default {
  getStories,
  setSortedStories,
  setStories,
  setStory,
}
