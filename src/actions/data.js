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

function setStorySaga(storyId) {
  return {
    type: types.DATA.SET_STORY_SAGA,
    payload: {
      storyId,
    },
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


function setNextStorySaga() {
  return {
    type: types.DATA.SET_NEXT_STORY_SAGA,
    payload: {
    },
  }
}

// 一つ新しいストーリーをセットする
function setNextStory(nextStory) {
  return {
    type: types.DATA.SET_NEXT_STORY,
    payload: {
      nextStory,
    },
  }
}

function setPrevStorySaga() {
  return {
    type: types.DATA.SET_PREV_STORY_SAGA,
    payload: {
    },
  }
}

// 1つ古いストーリーをセットする
function setPrevStory(prevStory) {
  return {
    type: types.DATA.SET_PREV_STORY,
    payload: {
      prevStory,
    },
  }
}

export default {
  getStories,
  setSortedStories,
  setStories,
  setStory,
  setStorySaga,
  setNextStory,
  setNextStorySaga,
  setPrevStory,
  setPrevStorySaga,
}
