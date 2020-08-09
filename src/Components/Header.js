import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(auto);
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  width: 90px;
  height: 70px;
  border-bottom: 3px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  margin: 0 10px;
`;

const Blank = styled.div`
  flex: auto;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  font-size: 16px;
  font-weight: 600;
  :not(:first-child) {
    &:hover {
      opacity: 0.6;
    }
  }
`;

const Form = styled.form`
  display: flex;
  background-color: white;
  height: 40px;
  width: 350px;
  align-items: center;
  border-radius: 20px;
  margin-right: 50px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: auto;
  margin-left: 20px;
  height: 60%;
  font-size: 16px;
`;

const Search = styled(FaSearch)`
  color: rgba(20, 20, 20, 0.8);
  margin-right: 10px;
  font-size: 14px;
`;

const Logo = styled.i`
  width: 60px;
  height: 40px;
  background-color: white;
`;

export default withRouter(
  class extends Component {
    state = { value: "" };
    handleChange = (e) => {
      const {
        target: { value },
      } = e;
      this.setState({ value });
    };

    render() {
      const {
        location: { pathname },
      } = this.props;
      const { value } = this.state;
      return (
        <Header>
          <List>
            <Item>
              <SLink to="/">
                Logo
                {/* <Logo alt="icon" /> */}
              </SLink>
            </Item>
            <Item current={pathname.includes("/movie")}>
              <SLink to="/movie">영화</SLink>
            </Item>
            <Item current={pathname.includes("/tv")}>
              <SLink to="/tv">TV 프로그램</SLink>
            </Item>
            <Blank />
            <Form action={`/search${value ? `/${value}` : ""}`}>
              <Input
                placeholder="검색어를 입력하시오."
                onChange={this.handleChange}
                onSubmit={(e) => e.preventDefault()}
              />
              <SLink to={`/search${value ? `/${value}` : ""}`}>
                <Search />
              </SLink>
            </Form>
          </List>
        </Header>
      );
    }
  }
);
