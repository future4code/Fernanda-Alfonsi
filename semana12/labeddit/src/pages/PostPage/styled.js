import styled from "styled-components"
import {TextField} from '@material-ui/core'



export const PostContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    `
export const FormContainer = styled.form`
    display: flex;
    justify-content: space-around;
    margin:0px 10px;
    align-items:center;
`

export const TextFieldStyled  = styled(TextField)`
    background-color:white;
    width:45vw;
`

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    margin:20px;
    `
export const ButtonEffect=styled.button`
  margin-left:10px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #1f4863;
  height:40px;

::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e7413e;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
`