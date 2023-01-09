import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { postsURL } from "../constants/urls.js";
import "../constants/font.css";
import Swal from "sweetalert2";

export default function Publish(props) {
  //const userData = useContext(props.userData);
  const [postUrl, setPostUrl] = useState();
  const [postText, setPostText] = useState();
  const [loading, setLoading] = useState(false);
  function handleSubmitPost(event) {
    event.preventDefault();
    if (postUrl.length === 0 || loading) {
      return;
    }
    setLoading(true);
    const postInfo = {
      url: postUrl,
      content: postText,
      userId: 1,
    };
    axios
      .post(postsURL, postInfo, {
        headers: {
          Authorization: `Bearer 14b85cfe-b788-4f45-b58a-a6e4589b0f82`,
        },
      })
      .then(success)
      .catch(failure);
  }
  function success() {
    setLoading(false);
    setPostUrl("");
    setPostText("");

    props.getPosts();
    console.log("oi");
  }
  function failure(data) {
    console.log(data);
    setLoading(false);
    Swal.fire("Houve um erro ao publicar seu link.");
  }
  return (
    <NewPost>
      <LeftBox>
        <UserImg src="https://static.displate.com/857x1200/displate/2021-04-09/b7b4d3e3a40c4dc0f212353ed79d997b_833c168276525a73bf78ff480e6a7578.jpg"></UserImg>
      </LeftBox>
      <RightBox>
        <Prompt>What are you going to share today?</Prompt>
        <Form id="newPostForm">
          <Field
            disabled={loading}
            placeholder="http://..."
            type="url"
            name="url"
            maxlength="20"
            value={postUrl}
            onChange={(e) => setPostUrl(e.target.value)}
            required
          />
          <ContentField
            disabled={loading}
            rows="4"
            name="comment"
            form="newPostForm"
            placeholder="Awesome article about #javascript"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></ContentField>
        </Form>
        <SubmitPost onClick={handleSubmitPost}>
          {loading && <span>Publishing...</span>}
          {!loading && <span>Publish</span>}
        </SubmitPost>
      </RightBox>
    </NewPost>
  );
}

const NewPost = styled.div`
  background-color: white;
  max-width: 611px;
  max-height: 209px;
  width: 100%;
  padding: 15px;
  margin-top: 12px;
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