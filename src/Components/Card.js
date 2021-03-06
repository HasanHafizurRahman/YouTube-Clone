import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Container = styled.div`
width: 260px;
margin-bottom: 45px;
cursor: pointer`;

const Image = styled.img`
width: 100%;
height: 152px;
background-color: #999;
`

const Details = styled.div`
display: flex;
margin-top: 16px;
gap: 12px;
`
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;`

const Texts = styled.div``;

const Title = styled.h1`
font-size: 16px;
font-weight: 500px;
color: ${({theme}) => theme.text};
`

const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
margin: 9px 0px;
`

const Info = styled.div``

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration: "none", color: "inherit"}}>
    <Container>
        <Image
    src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
     />
     <Details>
     <ChannelImage src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
        <Texts>
            <Title>Test Video</Title>
            <ChannelName>Hasan Shanto</ChannelName>
            <Info>660000 views  1 day ago</Info>
        </Texts>
        
     </Details>
    </Container>
    </Link>
  )
}

export default Card