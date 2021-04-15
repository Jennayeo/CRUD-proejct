import React from "react";
import styled from "styled-components";

const Detail = (props) => {
    const { history } = props;
    return (
        <React.Fragment>
            <Container>
                <Title>글 제목</Title>
                <User>글쓴이</User>
                <Content>글내용</Content>
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