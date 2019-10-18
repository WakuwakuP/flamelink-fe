import * as types from "../constants/ActionTypes";
import data from './data';

function first() {
  return {
    type: types.FIRST
  }
}

export default {
  ...data,
  first,
};
