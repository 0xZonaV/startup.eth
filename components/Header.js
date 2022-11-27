import React from "react";
import {Menu,Image} from "semantic-ui-react";
import {Link} from '../routes';

const Header = () => {
  return (
    <Menu borderless className="Menu" style={{ marginTop: "10px", background: "rgba(63, 65, 94, 0.9)", fontFamily: "'Kumbh Sans', sans-serif", boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.25)"}}>
      <Link route="/">
          <Image floated='left'
                 size='small'
                 src='/LogoFinal.png'
                 href='/'
                 style={{ margin: '2em 2em 2em' }}
          />
      </Link>

      <Menu.Menu position="right">
          <Link route="/projects/new">
              <a className="item" style={{color: "rgba(167, 171, 235, 1)", fontSize: "18px", fontFamily: "Kumbh Sans", fontStyle:"normal", marginRight: "2em", marginLeft: '2em'}}>
                  Create Project
              </a>
          </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
