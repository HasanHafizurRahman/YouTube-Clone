import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";


const Container = styled.div`
gap: 24px;
display: flex;`

const Content = styled.div`
flex: 5;`

const VideoWrapper = styled.div`
`

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: {({ theme }) => theme.text};}`

const Info = styled.span`
color: {({ theme }) => theme.textSoft}`

const Buttons = styled.div`
display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};`

const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;`

const Recommendation = styled.div`
flex: 2;`


const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe 
                    width="100%"
                    height="420"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title='YouTube Video Player'
                />
            </VideoWrapper>
            <Title>Test Video</Title>
            <Details>
                <Info>
                    1,84,876 views - 1 month ago
                </Info>
                <Buttons>
                <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
                </Buttons>
            </Details>
        </Content>
        <Recommendation>Recommendation</Recommendation>
    </Container>
  )
}

export default Video