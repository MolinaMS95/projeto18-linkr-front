import { useState } from "react";
import styled from "styled-components";

export default function Post(props) {
  const [postData, setPostData] = useState(props.postData);
  const [posts, setPosts] = useState([]);
  const [postUrl, setPostUrl] = useState();
  const [postText, setPostText] = useState();

  function handleSubmitPost() {

  }

  return (
    <Container>
      <LeftBox>
        <UserImg src={postData.userimage}></UserImg>
        <Likes>
          <ion-icon name="heart-outline"></ion-icon>
          <p>13 likes</p>
        </Likes>
      </LeftBox>
      <RightBox>
        <UserName>{postData.username}</UserName>
        <Content>{postData.content}</Content>
        <UrlDisplay href={postData.url} target="_blank">
          <UrlContent>
            <UrlTitle>{postData.urltitle}</UrlTitle>
            <UrlText>{postData.urldescription}</UrlText>
            <Url>{postData.url}</Url>
          </UrlContent>
          <UrlImage src={postData.urlimage} />
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
`;
const UserImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;

const Likes = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ion-icon {
    font-size: 20px;
    margin: 10px;
  }
  p {
    font-size: 9px;
  }
`;
const RightBox = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserName = styled.p`
  font-size: 17px;
  height: 20px;
`;
const Content = styled.p`
  font-size: 15px;
  height: 52px;
  width: 100%;
  color: #b7b7b7;
`;
const UrlDisplay = styled.a`
  height: 115px;
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
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