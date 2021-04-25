import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import QnA from "../components/QnA";
import Button from "../elements/Button";
import AddPost from "../pages/AddPost";
import Pagination from "../components/Pagination";


const Main = (props) => {
    return (
        <React.Fragment>
            <QnA />
            {/* <Pagination /> */}
        </React.Fragment>
    )
}

export default Main;