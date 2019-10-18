import * as types from '../constants/ActionTypes';

// 初期化
const initialState = {
  stories: null,
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
    default:
      return state;
  }
}
