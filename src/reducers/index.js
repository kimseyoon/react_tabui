import { SELET_TABNUMBER } from '../actions';
import { combineReducers } from 'redux';

const tabInitialState = {
  data : [
    {
      "title" : "tab01",
      "content" : "이곳은 tab01의 콘텐트 내용입니다."
    },
    {
      "title" : "tab02",
      "content" : "이곳은 tab02의 콘텐트 내용입니다."
    }
  ],
  selectedTabNumber : 0
}

const tab = (state = tabInitialState, action) => {
  switch (action.type) {
    case SELET_TABNUMBER :
      return Object.assign({}, state, {
        selectedTabNumber : action.selectedTabNumber
      });
      break;
    default:
      return state;
  }
}


const tabApp = combineReducers({
  tab
});

export default tabApp;
