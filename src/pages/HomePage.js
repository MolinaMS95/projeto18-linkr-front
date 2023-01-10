import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../constants/font.css";
import Post from "../components/Post.js";
import Publish from "../components/Publish.js";
import Header from "../components/Header";

export default function HomePage(props) {

  const userData = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [postUrl, setPostUrl] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();
  const getPostsUrl = "";
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
  function handleSubmitPost(){

  }
  return (
    <Container>
      <Header/>
      <Title>timeline</Title>
      <Publish />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 72px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333333;

  @media (max-width: 475px) {
    margin-top: calc(72px + 65px);
  }
`;
const Title = styled.p`
  padding: 30px 0px 30px 16px;
  font-family: "Oswald", sans-serif;
  font-size: 34px;
  font-weight: 700;
  align-self: center;
  width: 100%;
  max-width: 611px;
`;
