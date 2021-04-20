import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import post, {actionCreators} from "../redux/modules/post";
import { Input } from "@material-ui/core";
import {actionCreators as postActions} from "../redux/modules/post"


const AddPost = (props) => {
    // const [title, setTitle] = useState(post.word); //초기값으로 _post.word값 설정
    // const [author, setAuthor] = useState(_post? _post.description : "");
    // const [comment, setComment] = useState(_post? _post.example : "");

    const {history} = props;
    const dispatch = useDispatch();


    // 포스트 추가 기능
    const [content, setContent] = useState({
        author: '',
        title: '',
        comment: ''
    })

    // const [viewContent, setViewContent] = useState([]);

    // 이부분 주석처리함
    // const [title, setTitle] = useState("");
    // const [author, setAuthor] = useState("");
    // const [comment, setComment] = useState("");

    // const [contents, setContents] = React.useState("");
    // 포스트 추가 함수 만들기
    // const changeContents = (e) => {
    //     setContents(e.target.value);
    // }
    // console.log(contents);

    // 함수 생성
    const getValue = e => {
        const { name, value } = e.target;
        setContent({
            ...content,
            [name]:value
        })
        // console.log(content);
    };

    useEffect(()=>{
        console.log(content)
    },[content])
    // 이부분 주석처리함
    // const newTitle = (e) => {
    //     setTitle(e.target.value);
    // }
    // const newAuthor = (e) => {
    //     setAuthor(e.target.value);
    // }
    // const newComment = (e) => {
    //     setComment(e.target.value);
    // }
    // console.log(title,author,comment);

    // const setPost = () => {
    //     if(!title || !author || !comment){
    //       window.alert("모두 입력해주세요");
    //       return;
    //     }

    //     dispatch(postActions.addPost(title, author, comment));
    //         console.log("정상");
    // };

    return (
        <React.Fragment>
                <InputBox
                    // 함수 먼저 만들고 _onChange로 글 넘겨줌
                    // _onChange = {(e) =>{
                    //     console.log("제목추가");
                    //     newTitle(e.target.value);}}
                    onChange={getValue}
                    // value={title}
                    name="title"
                    placeholder="제목을 입력하세요"
                    // value={}
                />
                <InputBox
                    onChange = {getValue}
                    // value={author}
                    name="author"
                    placeholder="작성자를 입력하세요"
                    // value={}
                />
            <Contents
                onChange = {getValue}
                // value={comment}
                name="comment"
                placeholder="내용을 입력하세요"
                // value={}
            />
            <button
            onClick={() => {
                dispatch(postActions.addPostDB(content.title,content.author,content.comment))
            }}>글쓰기</button>
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