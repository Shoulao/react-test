import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function Header() {
  return (
    <Navigation>
      <ManuList>
        <MenuListElement>
          <Link to="/">Home</Link>
        </MenuListElement>
        <MenuListElement>
          <Link to="/change_context">Modify Context</Link>
        </MenuListElement>
        <MenuListElement>
          <Link to="/reciepes">Reciepes API</Link>
        </MenuListElement>
      </ManuList>
    </Navigation>
  );
}

export default Header;

const Navigation = styled.nav`
  display: flex;
  height: 80px;
`;

const ManuList = styled.ul`
  margin: 0;
  padding: 0 25px;
  list-style-type: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuListElement = styled.li`
  margin: 0;
  padding: 0;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 2px 2px 0 0 #000;
  transition: background-color 0.2s ease;
  height: 25px;
  margin-right: 10px;

  :hover {
    background-color: #fab525;
    cursor: pointer;
  }

  :last-of-type() {
    margin-right: 0;
  }

  > a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    height: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    text-align: center;
  }
`;
