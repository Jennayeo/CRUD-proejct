import React from "react";
import styled from "styled-components";

//  리덕스 스토어에있는 데이터 가져온다
import {useSelector, useDispatch} from "react-redux";

const Detail = (props) => {
    const { history } = props;
    const contents_list = useSelector(state => state.post.list);
    // const {comment, no, title,author} = props;
    console.log(contents_list, props);
    // url의 자동으로 string으로 오는 no 숫자로 바꿔주기 
    const list_no = parseInt(props.match.params.no);

    return (
        <React.Fragment>
            <Container>
                <Title>글 제목: {contents_list[list_no-1].title}</Title>
                <User>글쓴이: {contents_list[list_no-1].author}</User>
                <Content>글 내용: {contents_list[list_no-1].comment}</Content>
                <button onClick={() => {
                    history.push('/');
                }}>돌아가기</button>
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