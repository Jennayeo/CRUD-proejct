// 액션 생성
const LOAD = "post/LOAD"; // 처음 화면 리스트 로드 // 모듈명(소문자)/액션명(대문자)
const CREATE = "post/CREATE"; // 데이터 추가하기

// Initial State
const initialState = {
    list: [{
        content_num: 1,
        content_user: "고영희",
        content_title: '나는 댕댕이다!',
        content_content: '내이름은 고영희 귀여운 댕댕이지'
    },
    {
        content_num: 2,
        content_user: "아무말",
        content_title: '나는 무말이다',
        content_content: '귀여운 계란말이지'
    }]
};

// 액션 생성 함수 -> 컴포넌트들에서 불러와야하기때문에 export
export const loadPost = () => {
    return {type:LOAD}; // 기본값이 지정되어있기때문에 데이터 안줘도됨
}

export const createPost = (new_content) => {
    return {type:CREATE, new_content} // 뭘 추가할지에대한 데이터 필요
}

// Reducer
// export default function reducer(state = {}, action = {})
// 값이 안 넘겨 졌을 경우 state, action안의 기본값을 넘겨줘라
// 하지만 우린 이미 initialState가 있기때문에 {안에}initialState 넣어주면됨
export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        // action.type으로 구분하겠다
        // action.type = type: CREATE, tyoe: LOAD 이부분
        case "post/LOAD": {
            return state; // initial state그대로 가져오는거니까
        }

        case "post/CREATE": {
            // create는 텍스트를 받아와서 새 배열을 만들고 새배열을 어떤 딕셔너리 안에있는 리스트라는 키값에 넣어줌
            // 새 배열 만들어준다.
            const new_list = [...state.list, action.new_content];
             // [기존배열(...state.list), 새 데이터는 뭐라고 넘어옴?(action.new_content) ]
            return {list: new_list}; // 새 리스트 리턴
        }
        default:
            return state;
    }
}