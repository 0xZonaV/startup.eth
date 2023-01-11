import styled from "styled-components";
import {Header} from "semantic-ui-react";

export const StyledHeaderMainPage = styled(Header)`
  &&& {
    color: rgba(167, 171, 235, 1);
    font-family: 'Kumbh Sans', sans-serif;
    margin-top: 8px;
    font-size: 32px;
    margin-bottom: 15px;
  }
`

export const DescriptionDiv = styled.div`
  &&& {
    font-size: 20px;
    color: rgba(158, 195, 222, 1);
  }
`

export const StyledH1Tag = styled(Header)`
  &&& {
    text-align: center;
    font-size:50px;
    margin-top: 75px;
    margin-bottom: 75px;
    font-family: 'Kumbh Sans', sans-serif;
    color: #9FDED6;
  }
`