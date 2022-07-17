import React from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({ theme }) => theme.bgLighter};
`

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
padding: 0px 20px;
justify-content: flex-end;
position: relative;`

const Search = styled.div`
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
width: 40%;
border: 1px solid #ccc;
border-radius: 3px;
;`
const Input = styled.input`
border: none;
background-color: transparent;
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input type="text" placeholder="Search" />
                    <SearchIcon />
                </Search>
            <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;