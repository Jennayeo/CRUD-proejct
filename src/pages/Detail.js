import React from "react";
import styled from "styled-components";

//  리덕스 스토어에있는 데이터 가져온다
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post"
import { history } from "../redux/configStore";

const Detail = (props) => {
    // const { history } = props;
    const contents_list = useSelector(state => state.post.list);
    console.log(props);
    // const {comment, no, title,author} = props;
    const dispatch = useDispatch();
    const post_id = props.match.params.id;
    const delPost = () => {
        console.log(post_id);
        dispatch(postActions.delPostDB(post_id))
    }
    // const editPost = () => {
    //     console.log(post_id);
    //     dispatch(postActions.editPostDB(post_id, contents_list[list_id].title, contents_list[list_id].comment))
    // }
    console.log(contents_list, props);
    // url의 자동으로 string으로 오는 no 숫자로 바꿔주기 
    // const list_id = contents_list.findIndex( (p) => p._id === post_id );
    const list_id = contents_list.findIndex( (p) => p._id === props.match.params.id );
        console.log(list_id)

    return (
        <React.Fragment>
            <Container>
                <Title>글 제목: {contents_list[list_id].title}</Title>
                <User>글쓴이: {contents_list[list_id].author}</User>
                <Content>글 내용: {contents_list[list_id].comment}</Content>
                <button onClick={() => {
                    history.push('/');
                }}>돌아가기</button>
                <button onClick={delPost
                    }>삭제하기</button>
                <button onClick={() => {history.push('/addpost/'+post_id)
                }}>수정하기</button>
            </Container>
        </React.Fragment>
    );
}

const Container = styled.div`
    width: 500px;
    margin: 200px auto;
    line-height: 1.5;
    text-align: left;

`;
const Title = styled.div`
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 500;
`;

const User = styled.div`
    margin-bottom: .5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;

`;

const Content = styled.div`
    background-color: lightgray;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 1rem;
`;

export default Detail;