import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import { Input } from "@material-ui/core";

const AddPost = (props) => {
    // const post_list = useSelector(state => state.post.list);
    return (
        <React.Fragment>
                <InputBox
                    label="글제목"
                    placeholder="제목을 입력하세요"
                    // value={}
                />
                <InputBox
                    label="글쓴이"
                    placeholder="글쓴이를 입력하세요"
                    // value={}
                />
            <Contents
                label="글내용"
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