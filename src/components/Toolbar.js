import React from 'react';
import { Input, Menu, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  a {
    color: black;
  }
`;

function Toolbar({ signoutClicked, sidebarButtonCLicked }) {
  return (
    <Wrapper>
      <Menu>
        <Menu.Item as={NavLink} name="View All" to="/notes" activeClassName="active" exact />
        {/* <Menu.Item as={NavLink} name="Categories" to="/categories" activeClassName="active" exact /> */}
        <Menu.Item as={NavLink} name="New Note" to="/notes/new" activeClassName="active" />
        <Menu.Item onClick={ sidebarButtonCLicked }>
          <Icon name="bars"></Icon>
        </Menu.Item>
        
        <Menu.Item position="right">
          {/* <Input className="icon" icon="search" placeholder="Search..." /> */}
          <Input action={{ type: 'submit', content: 'Search' }} placeholder='Search...' />
        </Menu.Item>

        <Dropdown item text='User'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={ signoutClicked }>Log Out</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </Wrapper>
  )
}

export default Toolbar;
