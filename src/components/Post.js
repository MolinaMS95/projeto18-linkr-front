import { useState } from "react";
import styled from "styled-components";

export default function Post(props) {
  const [postData, setPostData] = useState(props.postData);
  return (
    <Container>
      <LeftBox>
        <UserImg src="https://static.displate.com/857x1200/displate/2021-04-09/b7b4d3e3a40c4dc0f212353ed79d997b_833c168276525a73bf78ff480e6a7578.jpg"></UserImg>
        <Likes>
          <ion-icon name="heart-outline"></ion-icon>
          <p>13 likes</p>
        </Likes>
      </LeftBox>
      <RightBox>
        <UserName>Juvenal Juvêncio</UserName>
        <Content>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
          #react #material
        </Content>
        <UrlDisplay>
          <UrlContent>
            <UrlTitle>Como aplicar o Material UI em um projeto React</UrlTitle>
            <UrlText>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page. aaaaaa aa aaaaaa a  aaaaaa  aaa a a  aaaaaaaa  a    aaaaaaaaaaaaaa
            </UrlText>
            <Url>https://medium.com/@pshrmn/a-simple-react-router</Url>
          </UrlContent>
          <UrlImage src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
        </UrlDisplay>
      </RightBox>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 15px;
  width: 100%;
  max-width: 611px;
  height: 230px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #171717;

  @media (min-width: 612px) {
    border-radius: 10px;
  }
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50px;
`
const UserImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`

const Likes = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ion-icon{
    font-size: 20px;
    margin:10px;
  }
  p{
    font-size: 9px;
  }
`
const RightBox = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserName = styled.p`
  font-size: 17px;
  height: 20px;
`
const Content = styled.p`
  font-size: 15px;
  height: 52px;
  width: 100%;
  color: #b7b7b7;
`;
const UrlDisplay = styled.div`
  height: 115px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const UrlContent = styled.div`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid #4d4d4d;
  height: 100%;
  width: 100%;
  border-right: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
`;
const UrlImage = styled.img`
  height: 100%;
  width: 35%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;
const UrlTitle = styled.p`
  font-size: 11px;
  line-height: 13px;
  color: #cecece;
  overflow: hidden;
`;
const UrlText = styled.p`
  color: #9b9595;
  font-size: 9px;
  line-height: 11px;
  max-height: 44px;
  overflow-y: hidden;
  text-overflow: ellipsis;
`;
const Url = styled.p`
  color: #cecece;
  font-size: 9px;
  line-height: 11px;
  overflow: hidden;
`;