import React, { useEffect } from "react";
import styled from "styled-components";
// import {Route} from "react-router-dom";
// import Detail from './pages/Detail';

import { withRouter } from 'react-router-dom';
// 리덕스 훅 useSelector사용하여 데이터 리덕스에서 바로 가져오기
import {useSelector, useDispatch} from "react-redux";

import QnAContents from "./QnAContents";

import {actionCreators as postActions} from "../redux/modules/post"

import { history } from "../redux/configStore";


 const QnA = (props) => {
     const dispatch = useDispatch();
    // useEffect 사용 axios함수 콜 -> 페이지 접속 순간 
    // useSelector로 데이터를 불러옴
    useEffect(() => {
        dispatch(postActions.getPostDB());
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    // 훅 import후 변수선언
    const contents_list = useSelector(state => state.post.list);
    // state(initialstate)포스트에있는 리스트를 저장
    console.log(contents_list);
    const { history } = props;
    return (
        <React.Fragment>
                    <Table>
                        <Thead>
                            <tr>
                                <th>글번호</th>
                                <th>글쓴이</th>
                                <th>글제목</th>
                            </tr>
                        </Thead>
                        <Tbody>
                            {contents_list.map((list, index) => (
                                <QnAContents {...list} key={index} 
                                />
                                
                            ))}
                        </Tbody>
                    </Table>
                    <Button onClick={() => 
                            history.push('/addpost')}> 추가하기 </Button>
                                
                       
        </React.Fragment>);}
                       


const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 80%;
    margin: auto;
`;

const Thead = styled.thead`
    border-top: 1px solid #dee2e6;
    border-bottom: 2px solid #dee2e6;
    & th {
        padding: .75rem;}


`;

const Tbody = styled.tbody`
    border-bottom: 1px solid #dee2e6;
    cursor: pointer;
    margin: auto;
    width: 100%;
    
    & th {
        padding: .75rem;
      }
`;

const Button = styled.button`

`;

const ContentUser = styled.tbody`

`;

const ContentTitle = styled.tbody`
`;

export default withRouter(QnA);
