import styled from "styled-components";

import { Segment} from "semantic-ui-react";

export const StyledSegment = styled(Segment)`
  &&& {
    padding: 5em 0;
    border-radius: 1.5%;
    background: rgba(63, 65, 88, 0.9);
    margin-top: 130px;
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.25);
  }
`