import React from 'react';
import styled from 'styled-components';
import MyTube from '../img/logo.png';

const Container = styled.div`
flex:1;
background-color: #202020;
color: #fff;
height: 100vh;
font-size: 14px;
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
`;

const img = styled.img`
height: 25px;
`;

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img src={MyTube}/>
                    MyTube
                </Logo>
            </Wrapper>
        </Container>
       
    );
};

export default Menu;