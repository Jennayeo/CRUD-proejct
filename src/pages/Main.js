import React from "react";
import styled from "styled-components";
import QnA from "../components/QnA";
import Button from "../elements/Button";
import AddPost from "../pages/AddPost";


const Main = (props) => {

    return (
        <React.Fragment>
            <QnA />
            <Button />
        </React.Fragment>
    )
}

export default Main;