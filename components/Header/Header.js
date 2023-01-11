import React from "react";
import {Menu,Image} from "semantic-ui-react";
import Link from "next/link";
import {StyledHeader, StyledHeaderItem} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader borderless className="Menu">
          <Image floated='left'
                 size='small'
                 src='/LogoFinal.png'
                 href='/'
                 style={{ margin: '2em 2em 2em' }}
          />

      <Menu.Menu position="right">
          <Link href="/projects/new">
              <StyledHeaderItem className="item">
                  Create Project
              </StyledHeaderItem>
          </Link>
      </Menu.Menu>
    </StyledHeader>
  );
};

export default Header;
