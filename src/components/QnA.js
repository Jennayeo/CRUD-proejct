import React from "react";
import styled from "styled-components";

// 리덕스 훅 useSelector사용하여 데이터 리덕스에서 바로 가져오기
import {useSelector, useDispatch} from "react-redux";

 const QnA = (props) => {
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
                                <th>글번호{contents_list.content_num}</th>
                                <th>글쓴이</th>
                                <th>글제목</th>
                            </tr>
                        </Thead>
                        {contents_list.map((list, index) => {
                            return (
                            <Tbody 
                                className="list_item"
                                key={index} />))}

                        // <Tbody>
                        //     <td>

                        //        </td>
                        //     <td><ContentUser>
                        //     {contents_list.content_user}
                        //         </ContentUser></td>
                        //     <td><ContentTitle>
                        //     {contents_list.content_title}
                        //         </ContentTitle></td>
                        // </Tbody>)}
                    </Table>
        </React.Fragment>
    );

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
    
    & th {
        padding: .75rem;
      }
`;

const ContentNum = styled.tbody`

`;

const ContentUser = styled.tbody`

`;

const ContentTitle = styled.tbody`
`;

export default QnA;