import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../constants/font.css";
import Post from "../components/Post.js";

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
      <Title>timeline</Title>
      <NewPost>
        <LeftBox>
          <UserImg src="https://static.displate.com/857x1200/displate/2021-04-09/b7b4d3e3a40c4dc0f212353ed79d997b_833c168276525a73bf78ff480e6a7578.jpg"></UserImg>
        </LeftBox>
        <RightBox>
          <Prompt>What are you going to share today?</Prompt>
          <Form onSubmit={handleSubmitPost} id="newPostForm">
            <Field
              placeholder="http://..."
              type="url"
              name="url"
              maxlength="20"
              onChange={(e) => setPostUrl(e.target.value)}
            />
            <ContentField
              rows="4"
              name="comment"
              form="newPostForm"
              placeholder="Awesome article about #javascript"
              onChange={(e) => setPostText(e.target.value)}
            ></ContentField>
          </Form>
          <SubmitPost>
            <span>Publish</span>
          </SubmitPost>
        </RightBox>
      </NewPost>
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333333;
`;
const NewPost = styled.div`
  background-color: white;
  max-width: 611px;
  max-height: 209px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex: row;
  @media (min-width: 612px) {
    border-radius: 10px;
  }
`;
  
const Field = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 100%;
  height: 30px;
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  color: black;
  ::placeholder {
    color: #949494;
  }
  margin-bottom: 8px;
`;
const ContentField = styled.textarea`
  padding: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  width: 100%;
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  color: black;
  resize: none;
  ::placeholder {
    color: #949494;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px 0 5px 0;
`;
const Prompt = styled.p`
  color: #707070;
  font-size: 20px;
  margin-bottom: 8px;
  text-align: center;
  font-weight: 300;
  @media (min-width: 612px) {
    text-align: left;
  }
`;
const SubmitPost = styled.button`
  border: none;
  background: #1877f2;
  border-radius: 5px;
  width: 112px;
  height: 21px;
  float: right;
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
const LeftBox = styled.div`
  display: none;
  @media (min-width: 612px) {
    display: block;
    border-radius: 10px;
    height: 100%;
    margin-right: 15px;
  }
`;
const RightBox = styled.div`
  width: 100%;
`
const UserImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;