import React, { useCallback, useState } from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post"
const AddPost = (props) => {
    const post_list = useSelector(state => state.post.list);
    // 수정 페이지
    const post_id = props.match.params.id;
    const is_edit = post_id? true : false;
    // 수정모드니? p.id가 포스트 아이디와 똑같은지 찾아, 수정모드가 아닌 작성모드라면 null
    let _post = is_edit? post_list.find((p) => p._id === post_id) : null;
    const [title, setTitle] = useState(_post? _post.title : ""); //초기값으로 _post.word값 설정
    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
      }, [])
    const [content, setContent] = React.useState(_post? _post.comment : ""); //초기값으로 _post.word값 설정
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
      }, [])
    const [author, setAuthor] = React.useState(_post? _post.comment : ""); //초기값으로 _post.word값 설정
    const onChangeAuthor = useCallback((e) => {
        setAuthor(e.target.value);
      }, [])
    const dispatch = useDispatch();
    return (
      <React.Fragment>
        <InputBox
          onChange={onChangeTitle}
          placeholder="제목을 입력하세요"
          value={title}
        />
        <InputBox
          onChange={onChangeAuthor}
          placeholder="작성자를 입력하세요"
          value={author}
        />
        <Contents
          onChange={onChangeContent}
          placeholder="내용을 입력하세요"
          value={content}
        />
        {_post ? (
          <button
            onClick={() => {
              dispatch(postActions.editPostDB(title, post_id, content));
            }}
          >
            수정하기
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(postActions.addPostDB(title, author, content));
            }}
          >
            글쓰기
          </button>
        )}
      </React.Fragment>
    );
}
const InputBox = styled.input`
    display: block;
    margin: 20px auto;
    width: 500px;
    max-width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;
const Contents = styled.input`
    display: block;
    margin: 20px auto;
    width: 500px;
    max-width: 100%;
    height: 150px;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;
export default AddPost;