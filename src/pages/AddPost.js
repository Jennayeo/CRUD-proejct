import React, { useState } from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import { Input } from "@material-ui/core";

const AddPost = (props) => {
    // const post_list = useSelector(state => state.post.list);
    const {history} = props;

    // 포스트 추가 기능
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    // const [contents, setContents] = React.useState("");
    // 포스트 추가 함수 만들기
    // const changeContents = (e) => {
    //     setContents(e.target.value);
    // }
    // console.log(contents);
    const newTitle = (e) => {
        setTitle(e.target.value);
    }
    const newAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const newComment = (e) => {
        setComment(e.target.value);
    }
    console.log(title,author,comment);
    // const setPost = () => {
    //     if(!word || !description || !example){
    //       window.alert("모두 입력해주세요");
    //       return;
    //     }
    return (
        <React.Fragment>
                <InputBox
                    // 함수 먼저 만들고 _onChange로 글 넘겨줌
                    // _onChange = {(e) =>{
                    //     console.log("제목추가");
                    //     newTitle(e.target.value);}}
                    onChange={newTitle}
                    value={title}
                    label="title"
                    placeholder="제목을 입력하세요"
                    // value={}
                />
                <InputBox
                    onChange = {newAuthor}
                    value={author}
                    label="author"
                    placeholder="작성자를 입력하세요"
                    // value={}
                />
            <Contents
                onChange = {newComment}
                value={comment}
                label="comment"
                placeholder="내용을 입력하세요"
                // value={}
            />
            <button>글쓰기</button>
        </React.Fragment>
    )
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