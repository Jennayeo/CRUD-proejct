// import React from "react";
import { createAction, handleActions } from "redux-actions";
// axios설치했음
import axios from "axios";
import { produce } from "immer";

// 액션 생성
const LOAD = "post/LOAD"; // 처음 화면 리스트 로드 // 모듈명(소문자)/액션명(대문자)
const ADD_POST = "post/ADD_POST"; // 데이터 추가하기
const DEL_POST = "post/DEL_POST"; // post = 모듈명 // DEL_POST = 액션명
const EDIT_POST = "post/EDIT_POST";// 수정
// const LOADING = "LOADING"; // 무한 스크롤 구현

// 액션 생성 함수 -> 컴포넌트들에서 불러와야하기때문에 export
const loadPost = createAction(LOAD, (post_list) => ({ post_list }));
// export const loadPost = () => {
//     return {type:LOAD}; // 기본값이 지정되어있기때문에 데이터 안줘도됨
// }
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const delPost = createAction(DEL_POST, (post_id) => ({post_id}));
const editPost = createAction(EDIT_POST, (post_id, post) => ({post_id, post}))
// post = 수정할 내용물
// const loading = createAction(LOADING, (is_loading) => ({is_loading}));

// Initial State
const initialState = {
  list: [],
  // 무한 스크롤 구현
  // paging: {start: null, next: null, size: 3},
  // is_loading: false,
  items: 5,
  preItems: 0,
};

// componentDidMount (){
//     axios.get("http://spartacodingclub.shop/hh99/board/list");
// }


// axios
// 데이터 불러오기
// 데이터 불러와서 리덕스에 넣어주는 함수
const getPostDB = () => {

  // pagination
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = sueState(1);
  // const [postsPerPage, setPso]
  return function (dispatch) {
    // dispatch(loadPost(true));
    // 무한 스크롤 is_loading을 true로 바꿔주기
    // dispatch(loading(true));
    axios({
      method: "get",
      url: "http://spartacodingclub.shop/hh99/board/list",
      // params: { q: query, page: pageNumber }
    })
      .then((res) => {
        console.log(res.data.articles);
        dispatch(loadPost(res.data.articles));
        // let result = res.data.articles.slice(-5)
        // 리스트의 앞 번호 5개만 가져옴
        // console.log(result)
      })
      .catch((e) => console.log(e));
  };
};

// pagination
// const indexOfLastPost = currentPage * postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postPerPage;
// const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// 데이터 추가하기
const addPostDB = (title, author, comment) => {
  return function (dispatch, getState, { history }) {
    let formData = new FormData();

    formData.append("title", title);
    formData.append("author", author);
    formData.append("comment", comment);

    const DB = {
      method: "post",
      url: `http://spartacodingclub.shop/hh99/board/post`,
      data: formData,
    };

    axios(DB)
      .then(() => {
        window.alert("추가완료!");
        history.push("/");
      })
      .catch((err) => {
        window.alert("에러가 발생했습니다.");
        console.log(err);
      });
  };
};

// 데이터 삭제하기
const delPostDB = (post_id) => {
  return function (dispatch, getState, {history}) {
    let formData = new FormData();

    formData.append("objid", post_id);
    // dispatch(loadPost(true));
    axios({
      method: "post",
      url:`http://spartacodingclub.shop/hh99/board/delete`,
      data: formData
    })
      .then((res) => {
        window.location.replace('/')
        // let post_id = [...res.data];
        // dispatch(delPost(post_id));
      })
      .catch((e) => console.log(e));
  };
};

// const delPostDB = (post_id) => { 
//   return function (dispatch, getState, { history }) { 
//     console.log(post_id);
//     axios .post(`http://spartacodingclub.shop/hh99/board/delete`,{ data:{ objid:post_id }, 
//     "Access-Control-Allow-Origin": "*" }) 
//     .then((res) => { history.replace("/"); }) 
//     .catch((err) => { window.alert("게시물 삭제에 문제가 있어요!"); 
//   }); 
// }; 
// };

// 데이터 수정하기
const editPostDB = (title, post_id, comment) => {
  console.log('수정',title, post_id, comment)
  return function (dispatch, getState, {history}) {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("objid", post_id);
    formData.append("comment", comment);
    axios({
      method: "post",
      url: "http://spartacodingclub.shop/hh99/board/update",
      data:formData
    })
      .then((res) => {
      window.alert(res.data.msg)
        window.location.replace('/')
        // let post_id = [...res.data];
        // dispatch(editPost(post_id));
      })
      .catch((e) => console.log(e));
  };
};

// // Reducer
// // export default function reducer(state = {}, action = {})
// // 값이 안 넘겨 졌을 경우 state, action안의 기본값을 넘겨줘라
// // 하지만 우린 이미 initialState가 있기때문에 {안에}initialState 넣어주면됨
// // redux saga
// export default function reducer(state = initialState, action = {}){
//     switch (action.type) {
//         // action.type으로 구분하겠다
//         // action.type = type: CREATE, tyoe: LOAD 이부분
//         case "post/LOAD": {
//             return state; // initial state그대로 가져오는거니까
//         }

//         case "post/ADD_NEW_POST": {
//             // create는 텍스트를 받아와서 새 배열을 만들고 새배열을 어떤 딕셔너리 안에있는 리스트라는 키값에 넣어줌
//             // 새 배열 만들어준다.
//             const new_list = [...state.list, action.new_content];
//              // [기존배열(...state.list), 새 데이터는 뭐라고 넘어옴?(action.new_content) ]
//             return {list: new_list}; // 새 리스트 리턴
//         }
//         default:
//             return state;
//     }
// }

export default handleActions(
  {
    [LOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [DEL_POST]: (state, action) =>
    produce(state, (draft) => {
      let idx = draft.list.findIndex(
        (val) => val.objid === action.payload.post_id,
      );
      draft.list.splice(idx, 1);
    }),
    [EDIT_POST]: (state, action) =>
    produce(state, (draft) => {
      let idx = draft.list.findIndex(
        (val) => val.objid === action.payload.post_id
      );
      draft.list[idx] = {...draft.list[idx], ...action.payload.post};
    }),
    //  무한 스크롤
  //   [LOADING]: (state, action) => 
  //   produce(state, (draft) => {
  //     draft.is_loading = action.payload.is_loading;
  //   })
  },
  initialState
);

const actionCreators = {
  loadPost,
  addPost,
  delPost,
  editPost,
  getPostDB,
  addPostDB,
  delPostDB,
  editPostDB
};

export { actionCreators };