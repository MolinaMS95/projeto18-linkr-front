import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../constants/font.css";
import Post from "../components/Post.js";
import TrendingSidebar from "../components/TrendingSidebar.js";
import { useParams } from "react-router-dom";
import Publish from "../components/Publish";

export default function HashtagPage(props) {

  const userData = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getPostsUrl = "";

  const params = useParams().hashtag
  useEffect(() => {
    console.log(`Bearer ${userData.token}`);
    axios
      .get(getPostsUrl, {
        headers: { Authorization: `Bearer ${userData.token}` },
      })
      .then((data) => {
        setPosts(data.data);
      })
      .catch((data) => {
        console.log(data);
      });
  }, []);

  let hashtagName = "timeline"
  if (params) {
    hashtagName = params
  }

  return (
    <Container>
      <ContentBox>
        <TimelineColumn>
          <Title>{hashtagName}</Title>
          {!params && <Publish/>}
          <Post />
          <Post />
          <Post />
        </TimelineColumn>
        <TrendingSidebar />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333333;
`;

const ContentBox = styled.div`
    display: flex;
    justify-content: center;
`

const TimelineColumn = styled.div`
    flex-direction: column;
    align-items: center;
    padding-right: 2%;
`

const Title = styled.p`
  padding: 60px 0px 8px 5px;
  font-family: "Oswald", sans-serif;
  font-size: 34px;
  font-weight: 700;
  align-self: center;
  width: 100%;
  max-width: 611px;
`;
