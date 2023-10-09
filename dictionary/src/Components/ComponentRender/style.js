import styled from "styled-components";

export const BoxRender = styled.div`
    margin-top: 60px;
    width: 600px;
    border: 2px solid black;
    text-align: center;
`

export const P = styled.p`
  font-size: 1.6em;
  text-transform: ${(props) => props.textTransform || 'none'};
`