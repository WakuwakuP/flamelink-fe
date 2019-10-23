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
  storyId: undefined,
};

const notfoundStory = {
  title: 'Not Found.',
  content: '',
  author: {
    displayName: '',
  },
  category: {
    name: '',
  },
  thumbnail: [
    {
      url: ''
    },
  ],
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
        story: state.storyId !== undefined ? action.payload.stories[state.storyId] || notfoundStory : initialState.story,
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
    default:
      return state;
  }
}
