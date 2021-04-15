// 스토어 만들기

import {createStore, combineReducers} from "redux";
import POST from "./modules/post";
import {createBrowserHistory} from "history";

import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

// 단일 스토어
// 스토어엔 리듀서 하나만 들어간다
// 리듀서 다섯개있다면 하나로 뭉쳐서 보냄(combine reducer사용)
// const rootReducer = combineReducers({post});
const rootReducer = combineReducers({ post: POST, router: connectRouter(history), });

// 스토어에 이 리듀서를 넣어줌(createstore사용)
const store = createStore(rootReducer);

export default store;