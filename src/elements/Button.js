import React from "react";
import styled from "styled-components";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import AddPost from "../pages/AddPost";

const Button = (props) => {
    const { history } = props;
    // if (is_float) {
        return (
          <React.Fragment>
              <AddToPhotosIcon>
                  <button></button>
              </AddToPhotosIcon>
                
          </React.Fragment>
        ); }

export default Button;