import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";

// 리덕스 훅 useSelector사용하여 데이터 리덕스에서 바로 가져오기
import {useSelector, useDispatch} from "react-redux";

 const QnAContents = (props) => {
    // 훅 import후 변수선언
    const {comment, no, _id, title,author} = props;
    // props로 api의 데이터가 받아와진다 ???

    return (
        <React.Fragment>
                            <tr
                            onClick={() => 
                                history.push('/detail/'+_id)}>
                                <th>{no}</th>
                                <td>{author}</td>
                                <td>{title}</td>
                            </tr>
                                
        </React.Fragment>);}
                        


const Thead = styled.thead`
    border-top: 1px solid #dee2e6;
    border-bottom: 2px solid #dee2e6;
    & th {
        padding: .75rem;}
`;

const Tbody = styled.tbody`
    border-bottom: 1px solid #dee2e6;
    margin: auto;
    cursor: pointer;
    
    & th {
        padding: .75rem;
      }
    
`;

export default QnAContents;