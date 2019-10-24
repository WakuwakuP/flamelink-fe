import * as types from '../constants/ActionTypes';

// 初期化
const initialState = {
  stories: [],
  sortedStories: [],
  story: {
    title: '',
    content: '',
    author: {
      displayName: ''
    },
    category: {
      name: '',
    },
    thumbnail: [
      {
        url: ''
      },
    ],
  },
  nextStory: null,
  prevStory: null,
  storyId: '',
};

/**
 * storeを作る
 * @param {*} state 古いステート 
 * @param {*} action actionsで定義した 
 */
export default function data(state = initialState, action) {
  switch (action.type) {
    case types.DATA.SET_STORIES:
      return {
        ...state,
        stories: action.payload.stories,
      }
    case types.DATA.SET_SORTED_STORIES:
      return {
        ...state,
        sortedStories: action.payload.sortedStories,
      }
    case types.DATA.SET_STORY:
      return {
        ...state,
        story: state.stories[action.payload.storyId] || initialState.story,
        storyId: action.payload.storyId,
      }
    case types.DATA.SET_NEXT_STORY:
      return {
        ...state,
        nextStory: action.payload.nextStory,
      }
    case types.DATA.SET_PREV_STORY:
      return {
        ...state,
        prevStory: action.payload.prevStory,
      }
    default:
      return state;
  }
}
