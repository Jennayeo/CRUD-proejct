import React from "react";
import styled from "styled-components";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddPost from "../pages/AddPost";

import { history } from "../redux/configStore";

const Button = (props) => {
    const { history } = props;
    // if (is_float) {
        return (
          <React.Fragment>
              <AddCircleIcon>
                  <button onClick={() => 
                            history.push('/addpost')}></button>
              </AddCircleIcon>
                
          </React.Fragment>
        ); }

export default Button;