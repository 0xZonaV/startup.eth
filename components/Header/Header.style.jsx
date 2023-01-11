import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledHeader = styled(Menu)`
  &&& {
    margin-top: 10px;
    background: rgba(63, 65, 94, 0.9);
    font-family: 'Kumbh Sans', sans-serif; 
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.25);
  }
`

export const StyledHeaderItem = styled.a`
    &&& {
      color: rgba(167, 171, 235, 1);
      font-size: 18px;
      font-family: Kumbh Sans, sans-serif;
      font-style: normal;
      margin-right: 2em;
      margin-left: 2em;
    }
`